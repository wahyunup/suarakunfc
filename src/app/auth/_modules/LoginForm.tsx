"use client";

import { Input, Button } from "@/components/ui";
import { handleNumberChange } from "@/utils/handleChange";
import AuthTemplate from "../_template/AuthTemplate";

const LoginForm = () => {
  return (
    <AuthTemplate hasAcc={false}>
      <Input
        name="nik"
        placeholder="Nomer Induk Kependudukan (NIK)"
        type="text"
      />
      <Input
        name="numHp"
        placeholder="Nomor Handphone"
        type="text"
        onChange={(event) => handleNumberChange({ event })}
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
      />
      <Button background="primary" shadow size="large">
        Masuk
      </Button>
    </AuthTemplate>
  );
};

export default LoginForm;
