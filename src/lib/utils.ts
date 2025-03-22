import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Google } from "arctic";

export const googleOauthClient = new Google(
  process.env.AUTH_GOOGLE_ID as string,
  process.env.AUTH_GOOGLE_SECRET as string,
  process.env.NEXT_PUBLIC_URL + "/api/auth/callback/google",
);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
};
