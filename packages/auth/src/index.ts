import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

// Your base configuration
export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),,
    // Add other providers here if needed
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      // Protect routes here, e.g.,
      // if (pathname === "/protected-page") return !!auth;
      return true; // Allow all other requests
    },
  },
} satisfies NextAuthConfig;

// Export the handlers and auth functions
export const { handlers, auth, signIn, signOut } = NextAuth(config);
