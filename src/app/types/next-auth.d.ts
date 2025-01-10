import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      accessToken?: string;
      name?: string;
      nik?: string;
      pin?: string;
      phoneNumber?: string;
      isPinVerified?: boolean;
    } & DefaultSession["user"];
    accessToken?: string;
    isPinVerified?: boolean;
  }

  interface User {
    accessToken?: string;
    name?: string;
    nik?: string;
    pin?: string;
    phoneNumber?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    pin?: string;
    isPinVerified?: boolean;
  }
}
