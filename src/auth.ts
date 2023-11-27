import NextAuth, { type NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/db";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "juan@me.com" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
        try {
          if (!(credentials?.email && credentials?.password)) return null;
          const user = await db.user.findUniqueOrThrow({
            where: {
              email: credentials.email.trim().toLowerCase(),
              password: credentials.password.trim(),
            },
          });
          return user;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, user = {}, token = {} }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id ?? token.id,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 30,
  },
} satisfies NextAuthOptions;

export const handler = NextAuth(authConfig);
