export interface ButtonProps {
   children: React.ReactNode;
   background: "primary" | "secondary" | "accent";
   size: "small" | "medium" | "large";
   icon?: JSX.Element;
   className?: string;
   onClick?: () => void;
}