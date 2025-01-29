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
              avatar: user.mu_avatar_url,
              phoneNumber: user.mu_phoneNumber,
              pin: user.mu_pin,
              accessToken: user.token,
              address: user.mu_address,
              province: user.mu_province,
              district: user.mu_district,
              city: user.mu_city,
              bloodType: user.mu_blood_type,
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
      trigger,
      session,
    }: {
      token: JWT;
      user?: User | null;
      trigger?: "signIn" | "update" | "signUp" | undefined;
      session?: Session;
      account?: Account | null;
      profile?: Profile;
      isNewUser?: boolean;
    }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
        token.nik = user.nik;
        token.avatar = user.avatar
        token.phoneNumber = user.phoneNumber;
        token.pin = user.pin
        token.name = user.name
        token.address = user.address
        token.province = user.province
        token.district = user.district
        token.city = user.city
        token.bloodType = user.bloodType
        token.isPinVerified = false
      }

      if (trigger === "update" && session?.isPinVerified) {
        token.isPinVerified = session.isPinVerified;
      }

      return token;
    },
    
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
        nik: token.nik as string,
        avatar: token.avatar as string,
        phoneNumber: token.phoneNumber as string,
        pin: token.pin as string,
        name: token.name as string,
        address: token.address as string,
        city: token.city as string,
        province: token.province as string,
        district: token.district as string,
        bloodType: token.bloodType as string,
        isPinVerified: token.isPinVerified
      };
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
