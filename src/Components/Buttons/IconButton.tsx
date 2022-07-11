import React from "react";

interface PropsType {
  type: "green" | "red" | "yellow" | "black";
  icon: string;
  label?:string;
  onClick?: () => void;
}

const IconButton = ({ icon, onClick, type,label }: PropsType) => {
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
      <div className="cancel-container">
      <img src={icon} alt="icon" />
      <div>{label}</div>
      </div>
    </button>
  );
};

export default IconButton;
