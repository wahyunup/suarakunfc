export interface HandleChangeOptions {
  event: React.ChangeEvent<HTMLInputElement>;
  validate?: (value: string) => boolean;
}
