import React from "react";

interface PropsTypes {
  type?: "primary" | "secondary";
  label: string;
  onClick?: () => void;
}

const BigButton = ({ type, onClick, label }: PropsTypes) => {
  return (
    <button
      className={`button-big-primary ${
        type === "secondary" ? "button-big-secondary" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default BigButton;
