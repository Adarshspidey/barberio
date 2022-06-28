import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import UploadIcon from "../../../Components/UploadIcon";
import { ShopSetupLayOutProps } from "../../../Types/Props";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const UploadMorePic = ({ setShopSetupLayoutProps }: PropsType) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      goto: () => {
        navigate("/setup/add-service");
      },
    }));
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Upload More Image</div>

      <UploadIcon />
    </div>
  );
};

export default UploadMorePic;
