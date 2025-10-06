"use client";
import type React from "react";
import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Field, FieldError } from "@workspace/ui/components/field";
import { Spinner } from "@workspace/ui/components/spinner";
import { queryClient } from "../providers";
import { cn } from "@workspace/ui/lib/utils";
import { CheckCircleIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { isValidEmail } from "@/lib/input-field-validator";
import {
  generateInitialsFromString,
  generateRandomInitials,
} from "@/lib/avatar";
import {
  signUpToWaitlist,
  WaitListRequestResult,
} from "@/lib/tournament/waitlist/service";

const encouragingAwaitingUserLength = 11;
const successFeedbackVisualDurationSeconds = 2;

export type WaitlistFormProps = {
  className: React.ReactNode;
};

export default function WaitlistForm({ className }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(" ");
  const [showSuccessFeedback, setShowSuccessFeedback] = useState(false);
  const query = useWaitlist({ email });

  const totalUsersWaiting = query.data?.data?.data?.total ?? 0;

  async function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please provide a valid email address");
      return;
    }
    setError(null);
    await query.refetch();
  }

  useEffect(() => {
    if (query?.data?.data.success) {
      setEmail("");
      setError(null);
      setShowSuccessFeedback(true);
      const timer = setTimeout(() => {
        setShowSuccessFeedback(false);
        queryClient.invalidateQueries({ queryKey: ["waitlist"] });
      }, successFeedbackVisualDurationSeconds * 1000);

      return () => clearTimeout(timer);
    }

    if (query.isError) {
      setError("Uh Oh.. Please try again later.");
    }
  }, [query.status, query.fetchStatus]);

  return (
    <>
      <form onSubmit={handleSubmit} className={`${className}`}>
        <Field>
          <Input
            id="email"
            type="email"
            value={email}
            autoComplete="email"
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) {
                setError(null);
              }
            }}
            onBlur={() => setError(null)}
            placeholder="Enter your email"
            required
            className="h-12"
          />
          <FieldError
            role="alert"
            className="text-red-600 font-mono font-semibold text-xs px-1"
          >
            {error}
          </FieldError>
        </Field>

        <Button
          type="submit"
          variant="default"
          disabled={showSuccessFeedback || query.isFetching}
          className={cn(
            "h-12 transition-colors duration-300",
            showSuccessFeedback && "bg-green-400 hover:bg-green-400/80"
          )}
        >
          {showSuccessFeedback ? (
            <span className="flex items-center flex-wrap gap-x-2">
              <CheckCircleIcon className="text-white size-6" /> You're in!"
            </span>
          ) : (
            <>
              {query.isFetching ? <Spinner /> : null}
              Join now
            </>
          )}
        </Button>
      </form>

      {totalUsersWaiting < encouragingAwaitingUserLength ? null : (
        <div className="flex items-center gap-2 mt-10">
          <span className="inline-flex items-center -space-x-2.5">
            {Array.from({
              length: Math.min(3, totalUsersWaiting),
            }).map((_, index) => (
              <Avatar key={index} className="size-8">
                <AvatarImage
                  // src={"https://avatars.githubusercontent.com/u/93017833?v=4"}
                  src={""}
                  alt="placeholder"
                />
                <AvatarFallback>
                  {generateRandomProfilePictureInitials()}
                </AvatarFallback>
              </Avatar>
            ))}
          </span>

          <p className="font-medium tracking-tight text-muted-foreground/80">
            {totalUsersWaiting} people already joined
          </p>
        </div>
      )}
    </>
  );
}

export function useWaitlist({ email }: { email: string }) {
  return useQuery<AxiosResponse<WaitListRequestResult>>({
    queryKey: ["waitlist"],
    queryFn: async () => {
      try {
        return signUpToWaitlist(email);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response?.data.data?.type === "subscriber_already_exists") {
            return {
              ...error.response,
              data: {
                ...error.response.data,
                success: true,
              },
              success: true,
            };
          }
        }

        throw error;
      }
    },
    enabled: false,
    retry: (failureCount, error) => {
      if (failureCount < 2) {
        return true; // Retry up to 3 times
      }

      return false;
    },
  });
}

function generateRandomProfilePictureInitials(seed?: string) {
  return seed ? generateInitialsFromString(seed) : generateRandomInitials();
}
