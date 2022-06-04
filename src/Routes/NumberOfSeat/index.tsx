import React from "react";
import { useNavigate } from "react-router-dom";

const NumberOfSeat = () => {
  const navigate = useNavigate();
  return (
    <div>
      Number Of Seats
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
