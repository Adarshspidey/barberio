import React from "react";

interface PropsTypes {
  type?: "primary" | "secondary" | "orange" |"continue";
  label: string;
  onClick?: () => void;
}

const BigButton = ({ type, onClick, label }: PropsTypes) => {
  return (
    <button
      className={`button-big-primary ${
        type === "secondary"
          ? "button-big-secondary"
          :type === "continue"
          ? "button-continue-big"
          : type === "orange"
          ? "button-orange-big"
          : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default BigButton;
