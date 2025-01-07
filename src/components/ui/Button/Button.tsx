import { ButtonProps } from "@/components/@types/ui";
import clsx from "clsx";

const Button = ({
  onClick,
  children,
  className,
  shadow,
  icon,
  iconPosition = "left",
  background = "primary",
  size,
  type = "button",
  disabled
}: ButtonProps) => {
  return (
    <>
      <button
        className={clsx(
          "rounded-button__radius font-bold",
          {
            "bg-primary text-white": background === "primary",
            "bg-secondary text-white": background === "secondary",
            "bg-white text-primary rounded-md": background === "accent",
            "bg-transparent border border-white text-white": background === "transparent",
            "bg-disabled text-white cursor-not-allowed": background === "disabled",
            "shadow-button__shadow shadow-white": shadow,
            "flex items-center justify-center gap-2": icon,
            "px-1 py-0.5 text-xs": size === "xsmall",
            "px-2 py-1 text-sm": size === "small",
            "px-4 py-2 text-base": size === "medium",
            "px-6 py-3 text-lg": size === "large",
          },
          className
        )}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </button>
    </>
  );
};

export default Button;
