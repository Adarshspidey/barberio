import React from "react";
import { useNavigate } from "react-router-dom";

const AddInterval = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Intervals</h1>
      <div>
        <div
          onClick={() => {
            navigate("/setup/interval-list");
          }}
        >
          Spa
        </div>
        <div
          onClick={() => {
            navigate("/setup/interval-list");
          }}
        >
          Facial
        </div>
        <div
          onClick={() => {
            navigate("/setup/interval-list");
          }}
        >
          Hair Cutting
        </div>
      </div>
      <br />
      Common Interval <br /> <br />
      Start Time
      <input type="text" />
      End Time
      <input type="text" />
      <button
        onClick={() => {
          navigate("/setup/shop-type");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default AddInterval;
