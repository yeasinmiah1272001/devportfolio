import React from "react";
import { yeasin } from "../../assets";

const AnimatedBorder = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 p-2 sm:p-3">
        {/* Outer rotating border */}
        <div className="absolute inset-0 rounded-full animate-spin-slow">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 animate-gradient-x"></div>
        </div>
        <div className="absolute inset-[4px] sm:inset-[6px] bg-black rounded-full"></div>

        {/* Middle rotating border */}
        <div className="absolute inset-[8px] sm:inset-[12px] rounded-full animate-spin-reverse-slow">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-800 via-teal-500 to-indigo-500 animate-gradient-xy"></div>
        </div>
        <div className="absolute inset-[14px] sm:inset-[18px] bg-black rounded-full"></div>

        {/* Inner rotating border */}
        <div className="absolute inset-[20px] sm:inset-[24px] rounded-full animate-spin-slower">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 animate-gradient-y"></div>
        </div>
        <div className="absolute inset-[26px] sm:inset-[30px] bg-black rounded-full"></div>

        {/* Image container */}
        <div className="absolute bg-white inset-[26px] sm:inset-[30px] rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={yeasin}
            alt="Center Image"
            className="rounded-full p-2 sm:p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedBorder;
