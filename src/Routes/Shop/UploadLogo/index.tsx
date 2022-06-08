import React from "react";
import { useNavigate } from "react-router-dom";

const UploadLogo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/setup/upload-cover-pic");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default UploadLogo;
