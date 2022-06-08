import React from "react";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button 
      onClick={() => {
        navigate("/setup/add-service-form");
      }} >Add</button>
      <div className="service-list">
        <div>Spa</div>
        <div>Hair Cutting</div>
        <div>Facial</div>
      </div>
      <button
        onClick={() => {
          navigate("/setup/schedule-time");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default AddService;
