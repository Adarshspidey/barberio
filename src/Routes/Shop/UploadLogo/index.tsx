import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UploadDocument from "../../../Components/Input/UploadDocument";
import UploadIcon from "../../../Components/UploadIcon";
import { ShopSetupLayOutProps } from "../../../Types/Props";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const UploadLogo = ({ setShopSetupLayoutProps }: PropsType) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 1,
      goto: () => {
        navigate("/setup/upload-cover-pic");
      },
    }));
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Your Logo / Brand Image</div>

      <UploadIcon />
      <UploadDocument/>
    </div>
  );
};

export default UploadLogo;
