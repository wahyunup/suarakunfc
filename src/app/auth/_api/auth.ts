import callSuarakuApi from "@/lib/api";
import { RegisterPayload } from "../_types/auth";

export const registerApi = async (data: RegisterPayload) => {
  const res = await callSuarakuApi.post("/auth/register", data);
  return res.data;
};
