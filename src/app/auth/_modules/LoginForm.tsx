"use client";

import { Input, Button } from "@/components/ui";
import { handleNumberChange } from "@/utils/handleChange";
import Layout from "@/app/auth/_template/authlayout";

const LoginForm = () => {
  return (
    <>
    <Layout heading="Masuk" subHeading={false}>
      <Input name="nik" placeholder="Nomer Induk Kependudukan (NIK)" type="number"/>
      <Input name="numHp" placeholder="Nomer Handphone" type="number" />
      <Input name="password" placeholder="Password" type="password" />
      <Button background="primary" shadow size="large">Masuk</Button>
    </Layout>
    </>
  );
};

export default LoginForm;
