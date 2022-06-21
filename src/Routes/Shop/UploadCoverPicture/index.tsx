import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";

const UploadCoverPicture = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Upload Cover Picture</h1>
      <BigButton
        type="primary"
        label="Next"
        onClick={() => {
          navigate("/setup/upload-more-pic");
        }}
        />
      
    </div>
  );
};

export default UploadCoverPicture;
