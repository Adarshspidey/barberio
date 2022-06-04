import React from "react";
import { useNavigate } from "react-router-dom";

const ScheduleTime = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button>Schedule By Day</button>
      <div>Calendar Days</div>
      Start Time
      <input type="text" />
      End Time
      <input type="text" />
      <button
        onClick={() => {
          navigate("/setup/schedule-by-day");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default ScheduleTime;
