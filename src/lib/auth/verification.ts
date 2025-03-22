import { sha256 } from "@oslojs/crypto/sha2";
import {
  encodeBase32LowerCaseNoPadding,
  encodeHexLowerCase,
} from "@oslojs/encoding";
import prisma from "../prisma";

export function generateAuthToken(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const authToken = encodeBase32LowerCaseNoPadding(bytes);
  return authToken;
}

export async function createAuthLink(
  token: string,
  email: string,
): Promise<string> {
  const baseUrl = process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000";
  const authLink = `${baseUrl}/api/auth/verify?token=${token}`;
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60); // 1 hour

  try {
    const tokenHash = encodeHexLowerCase(
      sha256(new TextEncoder().encode(token)),
    );

    // Ensure that there is only one verification token per email
    await prisma.verificationToken.deleteMany({ where: { email } });

    await prisma.verificationToken.create({
      data: {
        token: tokenHash,
        email,
        expires_at: expiresAt,
      },
    });
  } catch (error) {
    console.error("Error in createAuthLink", error);
    throw new Error("Failed to store authentication token.");
  }

  return authLink;
}
