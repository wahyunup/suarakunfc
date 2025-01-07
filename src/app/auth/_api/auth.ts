import callSuarakuApi from "@/lib/api";
import { RegisterPayload, LoginPayload } from "../_types/auth";

export const registerApi = async (data: RegisterPayload) => {
  const res = await callSuarakuApi.post("/auth/register", data);
  return res.data;
};

export const loginApi = async (data: LoginPayload) => {
  const res = await callSuarakuApi.post("/auth/login", data);
  return res.data;
}