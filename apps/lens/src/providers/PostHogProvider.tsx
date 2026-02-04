"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init("YOUR_PROJECT_API_KEY", {
    api_host: "https://us.i.posthog.com", // or 'https://eu.i.posthog.com'
    person_profiles: "identified_only",
  });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
