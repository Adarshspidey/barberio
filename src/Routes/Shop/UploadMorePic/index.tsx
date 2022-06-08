import React from "react";
import { useNavigate } from "react-router-dom";

const UploadMorePic = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/setup/add-service");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default UploadMorePic;
