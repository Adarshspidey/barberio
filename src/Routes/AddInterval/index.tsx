import React from "react";
import { useNavigate } from "react-router-dom";

const AddInterval = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div>Spa</div>
        <div>Facial</div>
        <div>Hair Cutting</div>
      </div>
      Common Interval Start Time
      <input type="text" />
      End Time
      <input type="text" />
      <button
        onClick={() => {
          navigate("/setup/interval-list");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default AddInterval;
