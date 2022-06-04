import React from "react";
import { useNavigate } from "react-router-dom";

const ShopLocation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Where is Your Shop Located ?</div>
      <button>Back</button>
      Location
      <input type="text" />
      Address
      <textarea></textarea>
      <button
        onClick={() => {
          navigate("/setup/upload-logo");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default ShopLocation;
