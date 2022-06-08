import React from "react";
import { useNavigate } from "react-router-dom";

const ShopNearMe = () => {
  const navigate = useNavigate();
  return (
    <div>
      ShopNearMe
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
    </div>
  );
};

export default ShopNearMe;
