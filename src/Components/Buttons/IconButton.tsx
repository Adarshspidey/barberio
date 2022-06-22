import React from "react";

interface PropsType {
  type: "green" | "red" | "yellow" | "black";
  icon: string;
  onClick?: () => void;
}

const IconButton = ({ icon, onClick, type }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className={`icons-button ${
        type === "green"
          ? "button-green"
          : type === "red"
          ? "button-red"
          : type === "yellow"
          ? "button-yellow"
          : type === "black"
          ? "icon-black"
          : ""
      }`}
    >
      <img src={icon} alt="icon" />
    </button>
  );
};

export default IconButton;
