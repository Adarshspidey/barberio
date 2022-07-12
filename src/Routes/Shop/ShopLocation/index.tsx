import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import location from "../../../assets/Icons/location.svg";
import { ShopSetupLayOutProps } from "../../../Types/Props";
import { ShopLocation, ShopLocationError } from "../../../Types/Shop";
import useIdleCall from "../../../Hooks/useIdleCall";
import postCall from "../../../Services/postCall";
import { ValidationError } from "../../../Types/Error";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}


const Shoplocation = ({ setShopSetupLayoutProps }: PropsType) => {

  const emptyForm: ShopLocation = {
    address: "",
    location:{
      lattitude:11,
      longitude:11
    }
  };
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 0,
      goto: () => {
        navigate("/setup/upload-logo");
      },
      
    }));
  }, []);

  const [currentUpdatingField, setCurrentUpdatingField] = useState<string>("");
  const [locationData, setLocationData] = useState<ShopLocation>({ ...emptyForm });
  const [locationErrorData, setLocationErrorData] = useState<ShopLocationError>({
    ...emptyForm,
  });

  useIdleCall(
    () => {
      currentUpdatingField && validate(currentUpdatingField);
    },
    [locationData],
    1000
  );

  const onErrorChange = (key: string, value: string) => {
    setLocationErrorData((prev) => ({ ...prev, [key]: value }));
  };

  const validate = async (key: string) => {
    setLocationErrorData((prev) => ({ ...prev, [key]: "" }));
    const result = await postCall("/auth/login/validate", locationData);

    if (!result?.status) {
      return result.data.forEach(({ path, message }: ValidationError) => {
        if (key === path) onErrorChange(path, message);
      });
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Where is Your Shop Located ?</div>
      <div className="location-container">
        <div className="input-wrapper">
          <InputField
            label="Location"
            onChange={() => {}}
            value=""
            icon={location}
          />

          <InputField
            label="Address"
            type="textarea"
            onChange={() => {}}
            value=""
            icon={location}
            error={locationErrorData.address}
          />
        </div>
      </div>
    </div>
  );
};

export default Shoplocation;
