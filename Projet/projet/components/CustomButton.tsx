"use client";

import Image from "next/image";

import { CustomButtonProps } from "@types";

const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles} bg-blue-600 text-white hover:bg-blue-800`} // Styles adaptés pour le thème marin
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_right"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default Button;
