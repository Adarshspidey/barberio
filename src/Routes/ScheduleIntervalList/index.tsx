import React from "react";
import { useNavigate } from "react-router-dom";

const ScheduleIntervalList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>{" "}
      <br />
      <button
        onClick={() => {
          navigate("/shop/schedule-interval-form");
        }}
      >
        Add
      </button>
      <div className="interval-list">
        <div>Interval 1</div>
        <div>Interval 2</div>
      </div>
      <button
        onClick={() => {
          navigate("/shop/schedule-interval");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ScheduleIntervalList;
