import React from "react";
import { useNavigate } from "react-router-dom";

const ShopType = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Shop Type</h1>
      <input type="text" />
      <button
        onClick={() => {
          navigate("/setup/no-of-seat");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default ShopType;
