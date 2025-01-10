"use client";

import AuthTemplate from "../_template/AuthTemplate";
import { useAuth } from "../_hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputPin, Button } from "@/components/ui";
import { PinPayload } from "../_types/auth";
import { useSession } from "next-auth/react";
import { usePopup } from "@/context/PopupProvider";
import { useRouter } from "next/navigation";

const InputPinPage = () => {
  const { pinMutation } = useAuth();
  const { data: session, update: updateSession } = useSession();
  const { showPopup } = usePopup();
  const router = useRouter();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PinPayload>();

  const onSubmit: SubmitHandler<PinPayload> = (data) => {
    const payload = {...data, mu_nik: session?.user?.nik as string};
    pinMutation.mutate(payload, {
      onSuccess: async () => {
        await updateSession({ isPinVerified: true });

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
        console.log(error, "<--------- ERROR PIN");
      },
    });
  };

  return (
    <AuthTemplate isLinked>
      <div className="flex flex-col gap-4 max-w-[450px] mx-auto">
        <h1 className="text-xl font-bold text-center">Masukan PIN</h1>
        <InputPin
          name="mu_pin"
          onChange={(pin) => setValue("mu_pin", pin)}
          type="text"
        />
        {errors.mu_pin && (
          <p className="text-red-500 text-sm mt-2">{errors.mu_pin.message}</p>
        )}

        <Button
          background="primary"
          size="medium"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Masuk
        </Button>
      </div>
    </AuthTemplate>
  );
};

export default InputPinPage;
