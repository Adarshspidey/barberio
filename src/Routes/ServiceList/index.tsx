import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
  const navigate = useNavigate();
  return (
    <div>
      Services <br />
      <button
        onClick={() => {
          navigate("/shop/add-service-form");
        }}
      >
        Add
      </button>
      <div>
        <div>
          Hair Cutting
          <button
            onClick={() => {
              navigate("/shop/disable-service");
            }}
          >
            Disable
          </button>{" "}
        </div>
        <div>Spa</div>
      </div>
    </div>
  );
};

export default ServiceList;
