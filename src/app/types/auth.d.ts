import { NextAuthOptions } from "next-auth";

export interface Credentials {
  mu_nik: string;
  mu_password: string;
}

export type AuthOptions = NextAuthOptions;
