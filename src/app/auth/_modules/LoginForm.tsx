"use client";

import { Input, Button, Select } from "@/components/ui";
import { handleNumberChange } from "@/utils/handleChange";

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
      <Select
        placeholder="Pilih Provinsi"
        items={items}
        // onSelect={handleSelect}
        className="mt-3"
      />
      <Button className="w-full mt-3" background="primary" size="large" shadow>
        Masuk
      </Button>
    </>
  );
};

export default LoginForm;
