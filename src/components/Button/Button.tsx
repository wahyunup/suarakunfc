import { ButtonProps } from "../@types/types";
import clsx from "clsx";

const Button = ({
  onClick,
  children,
  className,
  background = "primary",
  size = "medium",
}: ButtonProps) => {
  return (
    <>
      <button
        className={clsx(
          {
            "bg-blue-500 text-white": background === "primary",
            "bg-red-500 text-white": background === "secondary",
            "bg-transparent border border-white": background === "accent",
            "px-4 py-2": size === "small",
            "px-6 py-3": size === "medium",
            "px-8 py-4": size === "large",
          },
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
