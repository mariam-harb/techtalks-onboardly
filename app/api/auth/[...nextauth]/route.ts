import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [],

  callbacks: {
    async jwt({ token }) {
      // Mock user & company for initial setup
      token.userId = "user-123";
      token.companyId = "company-abc";
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.userId = token.userId as string;
        session.user.companyId = token.companyId as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
