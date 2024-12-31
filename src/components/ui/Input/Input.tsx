"use client";

import { useState } from "react";
import { InputProps } from "@/components/@types/ui";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Input = ({
  name,
  placeholder,
  type,
  ref,
  className,
  error,
  onChange,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      <input
        type={isPasswordVisible ? "text" : type}
        name={name}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        className={`bg-input__primary rounded-input__radius w-full border-input__primary border h-[44px] text-font__placeholder px-2 outline-none placeholder:text-placeholder ${className}`}
      />

      {error && (
        <span className="text-red-500 text-sm font-bold">{error}</span>
      )}

      {type === "password" && (
        <span
          className="absolute right-4 top-1/3 cursor-pointer"
          onClick={handleShowPassword}
        >
          {isPasswordVisible ? (
            <FaRegEye className="text-[#C2C2C2]" />
          ) : (
            <FaRegEyeSlash className="text-[#C2C2C2]" />
          )}
        </span>
      )}
    </div>
  );
};

export default Input;
