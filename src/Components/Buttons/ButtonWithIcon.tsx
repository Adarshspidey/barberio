import { type } from "os";
import React from "react";

interface PropsType {
  leftIcon?: string;
  type?: "black" | "green" | "white" | "upload" | "noBorder";
  rightIcon?: string;
  label: string;
  onClick?: () => void;
}

const ButtonWithIcon = ({
  leftIcon,
  rightIcon,
  label,
  onClick,
  type,
}: PropsType) => {
  return (
    <button
      onClick={onClick}
      className={`back-button ${
        type === "white"
          ? "add-button"
          : type === "black"
          ? "button-icon-black"
          : type === "upload"
          ? "button-upload"
          : type === "green"
          ? "button-green"
          : ""
      }`}
    >
      <img src={leftIcon} alt="" />
      {label}
      <img src={rightIcon} alt="" />
    </button>
  );
};

export default ButtonWithIcon;
