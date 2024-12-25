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
}: ButtonProps) => {
  return (
    <>
      <button
        className={clsx(
          "rounded-button__radius font-bold",
          {
            "bg-primary text-white": background === "primary",
            "bg-secondary text-white": background === "secondary",
            "bg-transparent border border-white": background === "accent",
            "shadow-button__shadow": shadow,
            "flex items-center justify-center gap-2": icon,
            "px-4 py-2": size === "small",
            "px-6 py-3": size === "medium",
            "px-8 py-4": size === "large",
          },
          className
        )}
        onClick={onClick}
      >
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </button>
    </>
  );
};

export default Button;
