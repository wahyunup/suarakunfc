import { signIn, signOut, useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { RegisterPayload } from "../_types/auth";
import { registerApi } from "../_api/auth";

export const useAuth = () => {
  const { data: session, status } = useSession();

  const loginMutation = useMutation({
    mutationFn: async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      const result = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return result;
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterPayload) => {
      const result = await registerApi(data);
      console.log(result, "<---- result");
      return result;
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await signOut();
    },
  });

  return {
    session,
    status,
    loginMutation,
    logoutMutation,
    registerMutation,
  };
};
