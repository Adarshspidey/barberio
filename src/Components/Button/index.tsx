import React from "react";

interface PropsTypes {
  type?: string;
  onClick: () => {};
}

const Button = ({ type, onClick }: PropsTypes) => {
  return (
    <div>
      <button
        className={`button${type === "primary" ? "primary" : "secondary"}`}
        onClick={onClick}
      ></button>
    </div>
  );
};

export default Button;
