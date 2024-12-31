import callSuarakuApi from "@/lib/api";

export const fetchProvinces = async () => {
  const res = await callSuarakuApi.get("/region/provinces");
  return res.data;
};

export const fetchCities = async (provinceId: string) => {
  const res = await callSuarakuApi.get(`/region/cities/${provinceId}`);
  return res.data;
};

export const fetchDistricts = async (cityId: string) => {
  const res = await callSuarakuApi.get(`/region/districts/${cityId}`);
  return res.data;
};
