import { NextAuthOptions } from "next-auth";

export interface Credentials {
  nik: string;
  phoneNumber: string;
  password: string;
}

export type AuthOptions = NextAuthOptions;
