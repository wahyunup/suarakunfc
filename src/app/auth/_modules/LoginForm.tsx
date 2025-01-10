"use client";

import { useAuth } from "../_hooks/useAuth";
import { LoginPayload } from "../_types/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input, Button } from "@/components/ui";
import { useRouter } from "next/navigation";

import { handleNumberChange } from "@/utils/handleChange";
import AuthTemplate from "../_template/AuthTemplate";
import { usePopup } from "@/context/PopupProvider";

const LoginForm = () => {
  const { loginMutation } = useAuth();
  const router = useRouter();
  const { showPopup } = usePopup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>();

  const onSubmit: SubmitHandler<LoginPayload> = (data) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        showPopup({
          type: "success",
          title: "Success!",
          message: "Login berhasil!",
          onAction: () => {
            router.push("/");
          },
        });
      },

      onError: (error) => {
        showPopup({
          type: "error",
          title: "Oops!",
          message: `Login gagal: ${(error as Error).message}`,
        });
      },
    });
  };

  return (
    <AuthTemplate hasAcc={false} isTitle isLinked>
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
      </div>
    </AuthTemplate>
  );
};

export default LoginForm;
