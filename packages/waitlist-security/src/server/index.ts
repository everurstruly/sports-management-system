import type { ScrambleConfig, ScrambleParams } from "../types.js";

export function createUnscrambleEmail(config: ScrambleConfig) {
  return function unscrambleEmail({ email, key }: ScrambleParams): string {
    // Extract base64url part before @
    const base64url = email.split("@")[0]!;

    // Convert base64url back to standard base64
    let base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");

    // Add padding if needed
    while (base64.length % 4) {
      base64 += "=";
    }

    const BUF = (globalThis as any).Buffer;
    const decoded = BUF
      ? BUF.from(base64, "base64").toString("utf8")
      : atob(base64);

    // XOR again to reverse
    let original = "";
    for (let i = 0; i < decoded.length; i++) {
      original += String.fromCharCode(
        decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      );
    }
    return original;
  };
}
