export const config = {
  brandName: "Renna",
  appUrl:
    process.env.NODE_ENV === "production"
      ? (process.env.VERCEL_PROJECT_PRODUCTION_URL ??
        process.env.NEXT_PUBLIC_APP_URL!)
      : "localhost:3000",
  social: {
    github: "https://github.com/oghenetefa",
    twitter: "https://twitter.com/oghenetefa",
  },
};
