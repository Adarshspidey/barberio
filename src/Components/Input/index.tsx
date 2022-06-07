import React from "react";

interface PropsTypes {
  type: string;
}

const Input = ({ type }: PropsTypes) => {
  return (
    <div>
      <input type={type} />
    </div>
  );
};

export default Input;
