import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadIcon from "../../../Components/UploadIcon";
import { ShopSetupLayOutProps } from "../../../Types/Props";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const UploadLogo = ({ setShopSetupLayoutProps }: PropsType) => {

  const [logoUpload,setLogoUpload] = useState([]); 
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
      <UploadIcon 
      files=""
      id=""
      url=""
       />
    </div>
  );
};

export default UploadLogo;
