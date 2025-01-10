"use client";

import AuthTemplate from "../_template/AuthTemplate";
import { Button, Input, Select } from "@/components/ui";
import { handlePhoneNumberChange, handleNumberChange } from "@/utils/handleChange";
import { useAuth } from "../_hooks/useAuth";
import { useRegion } from "@/app/hooks/useRegion";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { RegisterPayload } from "../_types/auth";
import { usePopup } from "@/context/PopupProvider";
import { useRouter } from "next/navigation";
import {
  ProvincePayload,
  CityPayload,
  DistrictPayload,
} from "../_types/region";

interface FormInputs extends RegisterPayload {
  rePassword: string;
  mu_province_name: string;
  mu_city_name: string;
  mu_district_name: string;
}

const RegisterForm = () => {
  const { registerMutation } = useAuth();
  const { provincesQuery, useCitiesByProvince, useDistrictsByCity } =
    useRegion();

  const { showPopup } = usePopup();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      mu_province_name: "",
      mu_city_name: "",
      mu_district_name: "",
    },
  });

  const { data: provinces } = provincesQuery;
  const { data: cities } = useCitiesByProvince(watch("mu_province"));
  const { data: districts } = useDistrictsByCity(watch("mu_city"));

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const {
      rePassword,
      mu_province_name,
      mu_city_name,
      mu_district_name,
      ...registerData
    } = data;

    if (data.mu_password !== rePassword) {
      alert("Password dan Re-Password tidak cocok.");
      return;
    }

    registerMutation.mutate(
      {
        ...registerData,
        mu_province: mu_province_name,
        mu_city: mu_city_name,
        mu_district: mu_district_name,
      },
      {
        onSuccess: () => {
          showPopup({
            type: "success",
            title: "Success!",
            message: "Registrasi berhasil! Tekan Oke agar dialihkan ke halaman login",
            onAction: () => {
              router.push("/auth/login");
            },
          });
        },
        onError: (error) => {
          showPopup({
            type: "error",
            title: "Oops!",
            message: `Registrasi gagal: ${(error as Error).message}`,
          })
          console.log(error, "<--------- ERROR REGISTER");
        },
      }
    );
  };

  return (
    <AuthTemplate hasAcc={true} isTitle isLinked>
      <Input
        {...register("mu_fullname", { required: "Nama wajib diisi" })}
        name="mu_fullname"
        placeholder="Nama Lengkap"
        type="text"
        error={errors.mu_fullname?.message}
      />

      <Input
        {...register("mu_nik", {
          required: "NIK wajib diisi",
          // Gunakan "onChange" untuk memanggil handlePhoneNumberChange
          // handlePhoneNumberChange dipanggil dengan parameter "event" seperti ini:
          // - handlePhoneNumberChange memfilter input agar hanya menerima angka
          // - Nilai numeric yang dihasilkan dari handlePhoneNumberChange diteruskan kembali ke e.target.value
          // - Ini memastikan bahwa react-hook-form tetap menyinkronkan nilai input dengan form state
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
        {...register("mu_blood_type", { required: "Golongan Darah wajib diisi" })}
        name="mu_blood_type"
        placeholder="Golongan Darah"
        type="text"
        error={errors.mu_blood_type?.message}
      />

      <Input
        {...register("mu_phoneNumber", {
          required: "Nomor Handphone wajib diisi",
          onChange: (e) => {
            const numericValue = handlePhoneNumberChange({ event: e });
            e.target.value = numericValue;
          },
        })}
        name="mu_phoneNumber"
        placeholder="Nomor Handphone"
        type="text"
        error={errors.mu_phoneNumber?.message}
      />

      <Input
        {...register("mu_password", { required: "Password wajib diisi" })}
        name="mu_password"
        placeholder="Password"
        type="password"
        error={errors.mu_password?.message}
      />

      <Input
        {...register("rePassword", { required: "Re-Password wajib diisi" })}
        name="rePassword"
        placeholder="Re-Password"
        type="password"
        error={errors.rePassword?.message}
      />

      <Input
        {...register("mu_fullname", { required: "Alamat wajib diisi" })}
        name="mu_fullname"
        placeholder="Fullname"
        type="text"
        error={errors.mu_address?.message}
      />

      <Input
        {...register("mu_blood_type", { required: "Alamat wajib diisi" })}
        name="mu_blood_type"
        placeholder="Golongan darah"
        type="text"
        error={errors.mu_address?.message}
      />

      <Input
        {...register("mu_address", { required: "Alamat wajib diisi" })}
        name="mu_address"
        placeholder="Alamat"
        type="text"
        error={errors.mu_address?.message}
      />

      <Controller
        name="mu_province"
        control={control}
        rules={{ required: "Provinsi wajib dipilih" }}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Pilih Provinsi"
            items={provinces?.data?.map((prov: ProvincePayload) => ({
              id: prov.id,
              value: prov.id,
              label: prov.name,
            }))}
            onSelect={(item) => {
              field.onChange(item.value);
              setValue("mu_province_name", item.label);
              setValue("mu_city", "");
              setValue("mu_city_name", "");
            }}
          />
        )}
      />

      <Controller
        name="mu_city"
        control={control}
        rules={{ required: "Kota wajib dipilih" }}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Kota"
            items={cities?.data?.map((city: CityPayload) => ({
              id: city.id,
              value: city.id,
              label: city.name,
            }))}
            onSelect={(item) => {
              // Panggil field.onChange untuk memperbarui nilai field di form
              // - `value` adalah nilai yang dipilih pengguna dari dropdown
              // - `field.onChange(item.value)` adalah fungsi bawaan react-hook-form yang digunakan untuk memperbarui nilai field di form state

              field.onChange(item.value);
              setValue("mu_city_name", item.label);
              setValue("mu_district", "");
              setValue("mu_district_name", "");
            }}
          />
        )}
      />
      <Controller
        name="mu_district"
        control={control}
        rules={{ required: "Kecamatan wajib dipilih" }}
        render={({ field }) => (
          <Select
            {...field}
            placeholder="Kecamatan"
            items={districts?.data?.map((district: DistrictPayload) => ({
              id: district.id,
              value: district.id,
              label: district.name,
            }))}
            onSelect={(item) => {
              field.onChange(item.value);
              setValue("mu_district_name", item.label);
            }}
          />
        )}
      />

      <Button
        background="primary"
        shadow
        size="large"
        type="submit"
        onClick={handleSubmit(onSubmit)}
      >
        Lanjutkan
      </Button>
    </AuthTemplate>
  );
};

export default RegisterForm;