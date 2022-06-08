import React from "react";
import { useNavigate } from "react-router-dom";

const ScheduleByDay = () => {
  const navigate = useNavigate();
  return (
    <div>
      Schedule By Day
      <div>Calendar Days</div>
      Start Time
      <input type="text" />
      End Time
      <input type="text" />
      <button
        onClick={() => {
          navigate("/setup/interval");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default ScheduleByDay;
