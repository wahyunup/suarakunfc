import { useQuery } from "@tanstack/react-query";
import { fetchProvinces, fetchCities, fetchDistricts } from "../api/region/regionApi";

export const useRegion = () => {
  const provincesQuery = useQuery({
    queryKey: ["provinces"],
    queryFn: fetchProvinces,
    staleTime: 5 * 60 * 1000,
  });

  const useCitiesByProvince = (provinceId: string) => {
    return useQuery({
      queryKey: ["cities", provinceId],
      queryFn: () => fetchCities(provinceId),
      enabled: !!provinceId,
    });
  };

  const useDistrictsByCity = (cityId: string) => {
    return useQuery({
      queryKey: ["districts", cityId],
      queryFn: () => fetchDistricts(cityId),
      enabled: !!cityId,
    });
  };

  return {
    provincesQuery,
    useCitiesByProvince,
    useDistrictsByCity,
  }
};
