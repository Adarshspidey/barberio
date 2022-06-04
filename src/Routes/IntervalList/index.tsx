import React from "react";
import { useNavigate } from "react-router-dom";

const IntervalList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button>Add</button>
      <div className="interval-list">
        <div>Interval 1</div>
        <div>Interval 2</div>
      </div>
      <button
        onClick={() => {
          navigate("/setup/interval-form");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default IntervalList;
