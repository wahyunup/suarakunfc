"use client";

import { useState } from "react";
import { InputProps } from "../../@types/ui";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Input = ({
  name,
  placeholder,
  type,
  className,
  onChange,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      <input
        type={isPasswordVisible ? "text" : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`bg-input__primary rounded-input__radius w-full border-input__primary border h-[44px] text-font__placeholder px-2 outline-none placeholder:text-placeholder ${className}`}
      />

      {type === "password" && (
        <span
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={handleShowPassword}
        >
          {isPasswordVisible ? (
            <FaRegEye className="text-black" />
          ) : (
            <FaRegEyeSlash className="text-black" />
          )}
        </span>
      )}
    </div>
  );
};

export default Input;
