import { HandleChangeOptions}  from "./@types/options";

/**
 * Mengelola perubahan input yang hanya mengizinkan karakter angka.
 */
export const handlePhoneNumberChange = ({ event, validate }: HandleChangeOptions) => {
  const input = event.target;
  const value = input.value;

  const numericValue = value.replace(/[^0-9]/g, "");

  if (numericValue.length > 0 && numericValue[0] === '0') {
    return null;
  }

  if (value !== numericValue) {
    input.value = numericValue;
  }

  // Validasi tambahan (opsional)
  if (validate && !validate(numericValue)) {
    return;
  }

  return numericValue;
};

export const handleNumberChange = ({ event }: HandleChangeOptions) => {
  const value = event.target.value;

  if (!/^\d*$/.test(value)) return null;

  return value;
}
