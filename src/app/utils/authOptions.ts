import NextAuth, { Account, Profile, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions, Credentials } from "../types/auth";
import callSuarakuApi from "@/lib/api";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        nik: {
          label: "Nomer Induk Kependudukan (NIK)",
          type: "text",
          name: "nik",
        },
        phoneNumber: {
          label: "Nomor Handphone",
          type: "text",
          name: "phoneNumber",
        },
        password: { label: "Password", type: "password", name: "password" },
      },

      async authorize(credentials: Credentials | undefined) {
        if (
          !credentials?.nik ||
          !credentials?.password ||
          !credentials?.phoneNumber
        ) {
          return null;
        }
        const res = await callSuarakuApi.post("/auth/login", credentials);
        const user = await res.data;
        if (user.token) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
      };
      return session;
    },
    async jwt({
      token,
      account,
    }: {
      token: JWT;
      user?: User | null;
      account?: Account | null;
      profile?: Profile;
      isNewUser?: boolean;
    }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
