import React from "react";
import { useNavigate } from "react-router-dom";

const UploadCoverPicture = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/setup/upload-more-pic");
        }}
      >
        Next
      </button>
    </div>
  );
};

export default UploadCoverPicture;
