import { ButtonProps } from "../@types/types";
import clsx from "clsx";

const Button = ({ onClick, children, className, background,img }: ButtonProps) => {
  return (
    <>
      <button
        className={clsx(className, {
          "bg-blue-500 text-white": background === "primary",
          "bg-red-500 text-white": background === "secondary",
          "bg-transparent border border-white": background === "accent",
        })}
        onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
