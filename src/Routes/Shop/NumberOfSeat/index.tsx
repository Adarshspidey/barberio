import React from "react";
import { useNavigate } from "react-router-dom";

const NumberOfSeat = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Number Of Seats</h1>
      <input type="text" />
      <button
        onClick={() => {
          navigate("/setup/profile-completed");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default NumberOfSeat;
