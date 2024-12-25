export interface ButtonProps {
   children: React.ReactNode;
   background: "primary" | "secondary" | "accent";
   size: "small" | "medium" | "large";
   icon?: JSX.Element;
   className?: string;
   onClick?: () => void;
}

export interface InputProps {
   placeholder: string;
   type: string;
   name: string;
   className?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps {
   label: string;
   className?: string;
}