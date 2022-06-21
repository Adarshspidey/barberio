import React from "react";

interface PropsType {
  leftIcon?: string;
  rightIcon?: string;
  label: string;
  onClick?: () => void;
}

const ButtonWithIcon = ({ leftIcon, rightIcon, label, onClick }: PropsType) => {
  return (
    <button onClick={onClick} className="back-button">
      <img src={leftIcon} alt="" />
      <span>{label}</span>
      <img src={rightIcon} alt="" />
    </button>
  );
};

export default ButtonWithIcon;
