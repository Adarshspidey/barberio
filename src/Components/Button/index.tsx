import React from "react";

interface PropsTypes {
  type?: string;
  icon?: string;
  onClick: () => {};
}

const Button = ({ type, onClick, icon }: PropsTypes) => {
  return (
    <div>
      <img src={icon} alt="" />
      <button
        className={`button${type === "primary" ? "primary" : "secondary"}`}
        onClick={onClick}
      ></button>
    </div>
  );
};

export default Button;
