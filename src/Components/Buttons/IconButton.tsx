import React from "react";

interface PropsType {
  type: "green" | "red" | "yellow";
  icon: string;
  onClick?: () => void;
}

const IconButton = ({ icon, onClick, type }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className={`button-icon ${
        type === "green"
          ? "button-green"
          : type === "red"
          ? "button-red"
          : type === "yellow"
          ? "button-yellow"
          : ""
      }`}
    >
      <img src={icon} alt="icon" />
    </button>
  );
};

export default IconButton;
