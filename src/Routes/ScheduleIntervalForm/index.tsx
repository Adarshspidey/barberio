import React from "react";
import { useNavigate } from "react-router-dom";

const ScheduleIntervalForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      Name of Interval
      <input type="text" />
      Start Time
      <input type="text" />
      End Time
      <input type="text" />
      <button
        onClick={() => {
          navigate("/shop/schedule-interval-list");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ScheduleIntervalForm;
