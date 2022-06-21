import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";

const UploadLogo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Upload Logo</h1>
      <BigButton
        type="primary"
        label="Next"
        onClick={() => {
          navigate("/setup/upload-cover-pic");
        }}
        />
    </div>
  );
};

export default UploadLogo;
