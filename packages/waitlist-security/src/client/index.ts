import type { ScrambleConfig, ScrambleParams } from "../types.js";

export function createScrambleEmail(config: ScrambleConfig) {
  return function scrambleEmail({ email, key }: ScrambleParams): string {
    let scrambled = "";
    for (let i = 0; i < email.length; i++) {
      scrambled += String.fromCharCode(
        email.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      );
    }

    // Convert to base64url (email-safe: no +, /, =)
    const base64 = btoa(scrambled);
    const base64url = base64
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");

    return `${base64url}@${config.domain}`;
  };
}
