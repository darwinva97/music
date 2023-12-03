"use server";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import { db } from "./db";
import { redirect } from "next/navigation";

const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        let callbackUrl = credentials?.callbackUrl as string | undefined;
        if (callbackUrl) {
          const parts = callbackUrl.split("?callbackUrl=");
          if (parts[1]) {
            callbackUrl = parts[1];
          }
        }

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await db.user.findUnique({
            where: {
              email,
              password,
            },
          });

          // callbackUrl && redirect(callbackUrl);

          return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});

const getHandlers = async () => {
  const { GET, POST } = handlers;
  return { GET, POST };
};

export { auth, signIn, signOut, getHandlers };
