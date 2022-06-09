import React from "react";
import { useNavigate } from "react-router-dom";

const UploadCoverPicture = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Upload Cover Picture</h1>
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
