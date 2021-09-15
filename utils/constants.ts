export const SITE_URL =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000"
    : "https://lelandcs.vercel.app";
