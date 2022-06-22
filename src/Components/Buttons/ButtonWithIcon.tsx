import { type } from "os";
import React from "react";

interface PropsType {
  leftIcon?: string;
  type?: "black" | "green" | "white";
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
      className={`back-button ${type === "white" ? "add-button" : ""}`}
    >
      <img src={leftIcon} alt="" />
      <span>{label}</span>
      <img src={rightIcon} alt="" />
    </button>
  );
};

export default ButtonWithIcon;
