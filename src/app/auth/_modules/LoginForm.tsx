"use client";

import { useAuth } from "../_hooks/useAuth";
import { LoginPayload } from "../_types/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input, Button } from "@/components/ui";
import { useRouter } from "next/navigation";

import { handleNumberChange } from "@/utils/handleChange";
import AuthTemplate from "../_template/AuthTemplate";
import PopUp from "@/components/ui/modal/PopUp";
import { useState } from "react";
import { PopupProps } from "@/components/@types/ui";

const LoginForm = () => {
  const { loginMutation } = useAuth();
  const router = useRouter();
  const [popUpData, setPopUpData] = useState<PopupProps | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();

  const onSubmit: SubmitHandler<LoginPayload> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        setPopUpData({
          type: "success",
          title: "Success!",
          message: "Login berhasil!",
        });
      },
        
      onError: (error) => {
        setPopUpData({
          type: "error",
          title: "Oops!",
          message: `Login gagal: ${(error as Error).message}`,
        });
      },
    });
  };

  return (
    <AuthTemplate hasAcc={false}>
      <div className="flex flex-col gap-2">
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
          onClick={handleSubmit(onSubmit)}>
          Masuk
        </Button>
      </div>
      {popUpData && (
        <PopUp
          type={popUpData.type}
          title={popUpData.title}
          message={popUpData.message}
          onAction={() => router.push("/dashboard")}
          onClose={() => setPopUpData(null)}
        />
      )}
    </AuthTemplate>
  );
};

export default LoginForm;
