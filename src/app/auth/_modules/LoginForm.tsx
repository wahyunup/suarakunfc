"use client";

import { Input, Button } from "@/components/ui";
import { handleNumberChange } from "@/utils/handleChange";

const LoginForm = () => {
  return (
    <>
      <Input
        name="text"
        type="text"
        placeholder="Nomor Induk Kependudukan (NIK)"
        onChange={(event) => handleNumberChange({ event })}
      />
      <Input
        name="text"
        type="text"
        placeholder="Nomor Handphone"
        onChange={(event) => handleNumberChange({ event })}
        className="mt-3"
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        className="mt-3"
      />
      <Button
        className="w-full"
        background="primary"
        size="large"
        shadow
      >
        Masuk
      </Button>
    </>
  );
};

export default LoginForm;
