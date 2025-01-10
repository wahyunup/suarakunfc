"use client";

import { useState } from "react";
import { InputPinProps } from "@/components/@types/ui";

const InputPin = ({ name, type = "text", ref, onChange }: InputPinProps) => {
  const [pin, setPin] = useState(Array(6).fill(""));

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value.slice(-1);
    setPin(newPin);

    if (onChange) {
      onChange(newPin.join(""));
    }

    if (value && index < 5) {
      document.getElementById(`pin-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !pin[index] && index > 0) {
      document.getElementById(`pin-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="flex space-x-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <input
            key={i}
            id={`pin-${i}`}
            type={type}
            name={name}
            ref={ref}
            inputMode="numeric"
            maxLength={1}
            value={pin[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-20 h-16 border border-gray-300 rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
    </div>
  );
};

export default InputPin;
