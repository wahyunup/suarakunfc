import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      accessToken?: string;
      name?: string;
      nik?: string;
      phoneNumber?: string;
    } & DefaultSession["user"];
    accessToken?: string;
  }

  interface User {
    accessToken?: string;
    name?: string;
    nik?: string;
    phoneNumber?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
