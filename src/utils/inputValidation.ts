/**
 * Checks if a given string is a valid numeric input.
 *
 * A valid numeric input is a string that consists only of the digits 0-9.
 * @param value the string to be checked
 * @returns true if the string is a valid numeric input, false otherwise
 */

export const validateNumericInput = (value: string): boolean => {
  return /^\d*$/.test(value);
};
