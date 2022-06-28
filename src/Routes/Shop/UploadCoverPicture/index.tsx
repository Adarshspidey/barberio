import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UploadIcon from "../../../Components/UploadIcon";
import { ShopSetupLayOutProps } from "../../../Types/Props";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const UploadCoverPicture = ({ setShopSetupLayoutProps }: PropsType) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      goto: () => {
        navigate("/setup/upload-more-pic");
      },
    }));
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Upload Cover Picture</div>

      <UploadIcon />
    </div>
  );
};

export default UploadCoverPicture;
