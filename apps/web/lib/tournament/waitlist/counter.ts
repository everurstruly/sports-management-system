import { createRemoteCounter } from "@/lib/remote-counter";

// Create a counter instance scoped to the waitlist namespace. Optionally
// this could accept runtime override for namespace/baseUrl if needed.
const counter = createRemoteCounter({ namespace: process.env.NEXT_PUBLIC_ABACUS_NAMESPACE });
const KEY = "users";

export async function get() {
  return counter.get(KEY);
}

export async function hit() {
  return counter.hit(KEY);
}

export default { get, hit };
