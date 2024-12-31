"use client";

import React, { useState } from "react";
import { SelectProps } from "@/components/@types/ui";
import { clsx } from "clsx";

const Select = ({
  className,
  items,
  label,
  placeholder,
  ref,
  onSelect,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedLabel, setSelectedLabel] = useState<string>(placeholder || "");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (item: { id: string; value: string; label: string }) => {
    setSelectedValue(item.value);
    setSelectedLabel(item.label);
    setIsOpen(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div className={clsx("relative inline-block w-full", className)} ref={ref}>
      {label && (
        <label className="block mb-1 text-sm font-medium">{label}</label>
      )}
      <button
        onClick={toggleDropdown}
        className={clsx(
          "w-full px-2 h-[44px] text-left border",
          "border-input__primary rounded-input__radius bg-input__primary",
          "flex justify-between items-center outline-none text-font__placeholder text-placeholder"
        )}
        type="button"
      >
        <span>{selectedLabel}</span>
        <svg
          className={clsx("w-4 h-4 transform transition-transform", {
            "rotate-180": isOpen,
          })}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {items &&
            items?.map((item) => (
              <li
                key={`${item.id}-${item.value}`}
                onClick={() => handleSelect(item)}
                className={clsx("px-4 py-2 cursor-pointer hover:bg-blue-100", {
                  "bg-blue-50": selectedValue === item.value,
                })}
              >
                {item.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
