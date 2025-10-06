export const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Generate two-letter initials deterministically from an input string.
 * If `seed` is omitted, falls back to a random initials generator.
 */
export function generateInitialsFromString(seed?: string): string {
  if (!seed) return generateRandomInitials();

  // Simple deterministic hash -> pick two indices from hash bytes
  let h = 2166136261 >>> 0; // FNV-1a 32-bit offset basis
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }

  // derive two pseudo-random indices from the 32-bit hash
  const idx1 = h % LETTERS.length;
  const idx2 = Math.floor((h / LETTERS.length) % LETTERS.length);

  return `${LETTERS[idx1]}${LETTERS[idx2]}`;
}

/**
 * Generate two-letter initials using a secure RNG when possible,
 * falling back to Math.random() for older environments.
 */
export function generateRandomInitials(): string {
  try {
    // Prefer crypto.getRandomValues when available (browser / Node 20+ with globalThis.crypto)
    const cryptoObj = typeof globalThis !== "undefined" ? (globalThis as unknown as { crypto?: { getRandomValues?: (arr: Uint8Array) => void } }).crypto : undefined;
    if (cryptoObj && typeof cryptoObj.getRandomValues === "function") {
      const arr = new Uint8Array(2);
      cryptoObj.getRandomValues(arr);
      if (arr && arr.length >= 2) {
        const i1 = arr[0]! % LETTERS.length;
        const i2 = arr[1]! % LETTERS.length;
        return `${LETTERS[i1]}${LETTERS[i2]}`;
      }
    }
  } catch (_) {
    // ignore and fallback
  }

  // Fallback to Math.random
  const i1 = Math.floor(Math.random() * LETTERS.length);
  const i2 = Math.floor(Math.random() * LETTERS.length);
  return `${LETTERS[i1]}${LETTERS[i2]}`;
}

export default generateRandomInitials;
