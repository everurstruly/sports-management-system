import axios, { AxiosInstance, AxiosResponse } from "axios";

export type CounterResponse = {
  value: number | null;
  status: number | null;
  retryAfter?: number; // seconds
};

async function parseRetryAfterFromHeaders(headers: Record<string, any>): Promise<number | undefined> {
  const raw = headers["retry-after"] || headers["Retry-After"];
  if (!raw) return undefined;
  const n = Number(raw);
  if (!Number.isNaN(n)) return n;
  return undefined;
}

export function createRemoteCounter(options?: {
  baseUrl?: string;
  namespace?: string;
  axiosInstance?: AxiosInstance;
}) {
  const baseUrl = options?.baseUrl ?? process.env.NEXT_PUBLIC_ABACUS_URL ?? "https://abacus.jasoncameron.dev";
  const namespace = options?.namespace ?? process.env.NEXT_PUBLIC_ABACUS_NAMESPACE ?? "everurstruly.com";
  const ax = options?.axiosInstance ?? axios;

  async function get(key: string): Promise<CounterResponse> {
    try {
      const url = `${baseUrl}/get/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`;
      const res: AxiosResponse<any> = await ax.get(url, { timeout: 3000 });
      const value = typeof res.data?.value === "number" ? res.data.value : null;
      return { value, status: res.status };
    } catch (err: any) {
      const status = err?.response?.status ?? null;
      const retryAfter = await parseRetryAfterFromHeaders(err?.response?.headers ?? {});
      return { value: null, status, retryAfter };
    }
  }

  async function hit(key: string): Promise<CounterResponse> {
    try {
      const url = `${baseUrl}/hit/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`;
      const res: AxiosResponse<any> = await ax.get(url, { timeout: 3000 });
      const value = typeof res.data?.value === "number" ? res.data.value : null;
      return { value, status: res.status };
    } catch (err: any) {
      const status = err?.response?.status ?? null;
      const retryAfter = await parseRetryAfterFromHeaders(err?.response?.headers ?? {});
      return { value: null, status, retryAfter };
    }
  }

  return { get, hit };
}

// Backwards-compatible default counter bound to env namespace
export const defaultCounter = createRemoteCounter();
export const abacusGet = defaultCounter.get;
export const abacusHit = defaultCounter.hit;

export default { createRemoteCounter, abacusGet, abacusHit };
