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
        mu_nik: {
          label: "Nomer Induk Kependudukan (NIK)",
          type: "text",
          name: "mu_nik",
        },
        mu_password: { label: "Password", type: "password", name: "mu_password" },
      },

      async authorize(credentials: Credentials | undefined) {
        if (!credentials?.mu_nik || !credentials?.mu_password) {
          return null;
        }
        try {
          const res = await callSuarakuApi.post("/auth/login", credentials);
          const user = res.data.data;

          if (user.token) {
            return { 
              ...user, 
              id: user.mu_id,
              nik: user.mu_nik,
              name: user.mu_fullname,
              phoneNumber: user.mu_phoneNumber,
              accessToken: user.token,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Login failed:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: User | null;
      account?: Account | null;
      profile?: Profile;
      isNewUser?: boolean;
    }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
        token.nik = user.nik;
        token.phoneNumber = user.phoneNumber;
        token.name = user.name
      }
      return token;
    },
    
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
        nik: token.nik as string,
        phoneNumber: token.phoneNumber as string,
        name: token.name as string
      };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
