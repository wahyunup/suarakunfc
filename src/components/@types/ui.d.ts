import React from "react";

export interface ButtonProps {
   children: React.ReactNode;
   background: "primary" | "secondary" | "accent";
   size: "small" | "medium" | "large" | "verysmall";
   shadow?: boolean;
   icon?: JSX.Element;
   iconPosition?: "left" | "right";
   className?: string;
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

export interface LayoutProps {
  children: React.ReactNode;
  hasAcc: boolean;
}