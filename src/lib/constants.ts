/**
 * Site-wide configuration constants.
 * The primary canonical domain is https://smsconstruction.in (non-www, HTTPS).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://smsconstruction.in";

