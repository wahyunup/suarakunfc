"use client";

import Layout from "../_template/authlayout";
import { Button, Input, Select} from "@/components/ui";

const RegisterForm = () => {

  return (
    <>
      <Layout heading="Daftar" subHeading={true}>
        <Input name="nik" placeholder="Nomer Induk Kependudukan (NIK)" type="number"/>
        <Input name="numHp" placeholder="Nomer Handphone" type="number" />
        <Input name="password" placeholder="Password" type="password" />
        <Input name="rePassword" placeholder="Re-Password" type="password" />
        <Input name="address" placeholder="Alamat" type="text" />

        <Select placeholder="Kecamatan" items={[]}></Select>
        <Button background="primary" shadow size="large">Lanjutkan</Button>
      </Layout>
    </>
  );
};

export default RegisterForm;
