import React from "react";
import { ChangeHandler } from "react-hook-form";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
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
  value?: string;
  error?: string;
  className?: string;
  ref?: React.forwardedRef<HTMLInputElement>;
  onBlur?: ChangeHandler;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps {
  label: string;
  className?: string;
}

interface SelectItem {
  id: string;
  value: string;
  label: string;
}

export interface SelectProps {
  items: SelectItem[];
  ref?: React.forwardRef<HTMLDivElement>;
  className?: string;
  label?: string;
  placeholder?: string;
  onSelect?: (item: SelectItem) => void;
}