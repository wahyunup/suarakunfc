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
  size = "medium",
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
            "bg-transparent border border-gray-200": background === "accent",
            "bg-disabled text-white cursor-not-allowed": background === "disabled",
            "shadow-button__shadow": shadow,
            "flex items-center justify-center gap-2": icon,
            "w-width__l h-height__l": size === "large",
            "w-width__m h-height__m": size === "medium",
            "w-width__s h-height__s": size === "small",
            "w-width__xs h-height__xs": size === "xsmall",
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
