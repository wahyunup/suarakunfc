"use client";

import { useAuth } from "../_hooks/useAuth";
import { LoginPayload } from "../_types/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input, Button } from "@/components/ui";
import { useRouter } from "next/navigation";
// import { handlePhoneNumberChange } from "@/utils/handleChange";
import AuthTemplate from "../_template/AuthTemplate";
import { handleNumberChange } from "@/utils/handleChange";

const LoginForm = () => {
  const { loginMutation } = useAuth();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();

  const onSubmit: SubmitHandler<LoginPayload> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        alert("Login berhasil!");
        router.push("/dashboard");
      },
      onError: (error) => {
        alert(`Login gagal: ${(error as Error).message}`);
        console.log(error);
      },
    });
  };

  return (
    <AuthTemplate hasAcc={false}>
      <Input
        {...register("mu_nik", {
          required: "NIK wajib diisi",
          onChange: (e) => {
            const numericValue = handleNumberChange({ event: e });
            e.target.value = numericValue;
          },
        })}
        name="mu_nik"
        placeholder="Nomor Induk Kependudukan (NIK)"
        type="text"
        error={errors.mu_nik?.message}
      />
      {/* <Input
        name="phoneNumber"
        placeholder="Nomor Handphone"
        type="text"
        onChange={(event) => handlePhoneNumberChange({ event })}
      /> */}
      <Input
        {...register("mu_password", { required: true })}
        name="mu_password"
        placeholder="Password"
        type="password"
      />
      <Button
        background="primary"
        shadow
        size="large"
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Masuk
      </Button>
    </AuthTemplate>
  );
};

export default LoginForm;
