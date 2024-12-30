"use client";

import Layout from "../_template/authlayout";
import { Button, Input, Select} from "@/components/ui";

const RegisterForm = () => {
  const kecamatan = [
    { value: "Pondok Aren", label: "Pondok Aren" },
    { value: "Pamulang", label: "Pamulang" },
    { value: "Ciputat", label: "Ciputat" },
    { value: "Cilegon", label: "Serpong" },
  ];
  const kota = [
    { value: "Tangerang Selatan", label: "Tangerang Selatan" },
    { value: "Tangerang", label: "Tangerang" },
    { value: "Serang", label: "Serang" },
    { value: "Cilegon", label: "Cilegon" },
  ];
  const provinsi = [
    { value: "Banten", label: "Banten" },
    { value: "Jawa Barat", label: "Jawa Barat" },
    { value: "Jawa Tengah", label: "Jawa Tengah" },
    { value: "Jawa Timur", label: "Jawa Timur" },
  ];

  return (
    <>
      <Layout hasAcc={true}>
        <Input name="nik" placeholder="Nomer Induk Kependudukan (NIK)" type="number"/>
        <Input name="numHp" placeholder="Nomer Handphone" type="number" />
        <Input name="password" placeholder="Password" type="password" />
        <Input name="rePassword" placeholder="Re-Password" type="password" />
        <Input name="address" placeholder="Alamat" type="text" />

        <Select placeholder="Provinsi" items={provinsi}/>
        <Select placeholder="Kota" items={kota}/>
        <Select placeholder="Kecamatan" items={kecamatan}/>
        <Button background="primary" shadow size="large">Lanjutkan</Button>
      </Layout>
    </>
  );
};

export default RegisterForm;
