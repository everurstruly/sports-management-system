import axios, { AxiosError, AxiosResponse } from "axios";
import { get as waitlistCounterGet, hit as waitlistCounterHit } from "@/lib/tournament/waitlist/counter";
import { createScrambleEmail } from "@workspace/waitlist-security/client";

const scrambleEmail = createScrambleEmail({ domain: "everurstruly.com" });

export type WaitListRequestResult = {
  success: boolean;
  data: { success: boolean; type?: "subscriber_already_exists"; total: number };
  message: string;
};

/**
 * Sign up an email to the waitlist provider and attempt to update the
 * waitlist counter in the background. This mirrors the behavior previously
 * implemented inline in the component.
 */
export async function signUpToWaitlist(email: string) {
  const apiKey = process.env.NEXT_PUBLIC_WAITLIST_PROVIDER_API_KEY;
  const url = `${process.env.NEXT_PUBLIC_WAITLIST_PROVIDER_URL}?api_key=${apiKey}`;
  const key = process.env.NEXT_PUBLIC_WAITLIST_CLIENT_KEY || "default-scramble-key-123";

  if (!process.env.NEXT_PUBLIC_WAITLIST_CLIENT_KEY) {
    console.warn(
      "[WAITLIST] Missing env NEXT_PUBLIC_WAITLIST_CLIENT_KEY; using fallback key (for testing)."
    );
  }

  try {
    const response = await axios.post<any, AxiosResponse<WaitListRequestResult>>(
      url,
      { email: scrambleEmail({ email, key }) },
      { timeout: 10000 }
    );

    // Fire-and-forget counter increment (don't block signup on this)
    waitlistCounterHit()
      .then((res) => {
        if (res?.value && typeof res.value === "number") {
          response.data.data.total = res.value;
        }
      })
      .catch((err) => {
        console.warn("[waitlist counter] hit (background) failed:", err);
      });

    return response;
  } catch (err) {
    if (err instanceof AxiosError) {
      const result = err.response?.data as WaitListRequestResult | undefined;
      if (result?.data?.type === "subscriber_already_exists") {
        const success = true;
        return {
          ...err.response,
          data: { ...result, success, data: { ...result.data, success } },
        } as AxiosResponse<WaitListRequestResult>;
      }
    }

    // Try reading a current counter value (non-fatal)
    try {
      const counterValRes = await waitlistCounterGet();
      const counterVal = counterValRes?.value;
      if (err instanceof AxiosError && err.response?.data && typeof counterVal === "number") {
        (err.response.data as WaitListRequestResult).data.total = counterVal;
      }
    } catch (_) {
      // ignore counter get failures
    }

    throw err;
  }
}

export default { signUpToWaitlist };
