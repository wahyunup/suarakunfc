export interface ButtonProps {
  children: React.ReactNode;
  background: "primary" | "secondary" | "accent" | "disabled";
  size: "xsmall" | "small" | "medium" | "large";
  shadow?: boolean;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps {
  label: string;
  className?: string;
}

interface SelectItem {
  value: string;
  label: string;
};

export interface SelectProps {
  items: SelectItem[];
  className?: string;
  label?: string;
  placeholder?: string;
  onSelect?: (value: string) => void;
}
