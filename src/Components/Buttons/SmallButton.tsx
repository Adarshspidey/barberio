import { type } from "os";
import React from "react";

interface PropsType {
  label: string;
  onClick?: () => void;
  type:
    | "primary"
    | "white"
    | "yellow"
    | "orange"
    | "green"
    | "black"
    | "saveBlack";
}

const SmallButton = ({ label, onClick, type }: PropsType) => {
  return (
    <div>
      <button
        className={`back-button ${
          type === "yellow"
            ? "button-yellow"
            : type === "orange"
            ? "button-orange"
            : type === "green"
            ? "button-green"
            : type === "black"
            ? "button-black"
            : type === "saveBlack"
            ? "button-saveBlack"
            : ""
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default SmallButton;
