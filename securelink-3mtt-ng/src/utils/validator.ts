export const safeLinks = [
  "https://google.com",
  "https://github.com",
  "https://facebook.com",
  "https://twitter.com",
  "https://openai.com",
];

export const dangerousLinks = [
  "https://g00gle-login.com",
  "https://faceb00k-security.net",
  "https://paypa1-verification.com",
  "https://free-money.xyz",
  "https://click-this-now.biz",
];

function normalizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return `${parsed.protocol}//${parsed.hostname}`.toLowerCase();
  } catch {
    return url.trim().toLowerCase();
  }
}

export type LinkResult = "safe" | "danger" | "unknown" | "invalid";

export function validateLink(url: string): LinkResult {
  const trimmed = url.trim();
  if (!trimmed) return "invalid";

  // Validate URL format using native URL constructor
  try {
    new URL(trimmed);
  } catch {
    // Try with https:// prefix
    try {
      new URL("https://" + trimmed);
    } catch {
      return "invalid";
    }
  }

  const normalized = normalizeUrl(
    trimmed.startsWith("http") ? trimmed : "https://" + trimmed
  );

  if (safeLinks.some((l) => normalizeUrl(l) === normalized)) return "safe";
  if (dangerousLinks.some((l) => normalizeUrl(l) === normalized)) return "danger";
  return "unknown";
}
