"use client";

import { Input, Button, Select } from "@/components/ui";
import { handleNumberChange } from "@/utils/handleChange";
import Layout from "@/app/auth/_template/authlayout";

const items = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
];

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
