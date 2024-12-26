import { HandleChangeOptions}  from "./@types/options";

/**
 * Mengelola perubahan input yang hanya mengizinkan karakter angka.
 */
export const handleNumberChange = ({ event, validate }: HandleChangeOptions) => {
  const input = event.target;
  const value = input.value;

  const numericValue = value.replace(/[^0-9]/g, "");

  if (value !== numericValue) {
    input.value = numericValue;
  }

  // Validasi tambahan (opsional)
  if (validate && !validate(numericValue)) {
    return;
  }
};
