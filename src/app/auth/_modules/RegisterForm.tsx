"use client";

import Layout from "../_template/authlayout";
import { Button, Input, Select, SelectOption } from "@/components/ui";

import { useState } from "react";

const RegisterForm = () => {
  const [datas,setDatas] = useState([
    {
      id:1,
      name:"Pondok aren"
    },
    {
      id:2,
      name:"Pamulang"
    },
    {
      id:3,
      name:"Ciputat"
    },
    {
      id:4,
      name:"Serpong"
    },
  ])

  return (
    <>
      <Layout heading="Daftar" subHeading={true}>
        <Input name="nik" placeholder="Nomer Induk Kependudukan (NIK)" type="number"/>
        <Input name="numHp" placeholder="Nomer Handphone" type="number" />
        <Input name="password" placeholder="Password" type="password" />
        <Input name="rePassword" placeholder="Re-Password" type="password" />
        <Input name="address" placeholder="Alamat" type="text" />

        <Select value="Kecamatan" id="">
          {
           datas.map((data) => (
             <SelectOption value="Kecamatan" key={data.id}>{data.name}</SelectOption>
           ))
          }
        </Select>
        <Button background="primary" shadow size="large">Lanjutkan</Button>
      </Layout>
    </>
  );
};

export default RegisterForm;
