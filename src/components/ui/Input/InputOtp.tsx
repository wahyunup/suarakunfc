"use client"

import { useState } from "react";

const InputOtp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="flex space-x-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={otp[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-12 h-12 border border-gray-300 rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <span className="text-gray-500 text-lg font-semibold">-</span>
      <div className="flex space-x-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <input
            key={i + 3}
            id={`otp-${i + 3}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={otp[i + 3]}
            onChange={(e) => handleChange(i + 3, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i + 3, e)}
            className="w-12 h-12 border border-gray-300 rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
    </div>
  );
}

export default InputOtp;