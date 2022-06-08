import React from "react";
import { useNavigate } from "react-router-dom";

const IntervalForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      Name of Interval
      <input type="text" />
      Start Time
      <input type="text" />
      End Time
      <input type="text" />
      <button
        onClick={() => {
          navigate("/setup/shop-type");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default IntervalForm;
