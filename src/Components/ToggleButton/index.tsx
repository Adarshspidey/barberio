import React from "react";

const ToggleButton = () => {
  return (
    <label className="toggle-button-container">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleButton;
