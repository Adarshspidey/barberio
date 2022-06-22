import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import UploadIcon from "../../../Components/UploadIcon";

const UploadCoverPicture = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Upload Cover Picture</div>

      <UploadIcon />

      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/upload-more-pic");
          }}
        />
      </div>
    </div>
  );
};

export default UploadCoverPicture;
