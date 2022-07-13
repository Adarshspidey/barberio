import React, { Dispatch, SetStateAction, SyntheticEvent, useEffect, useState } from "react";
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
      latitude:11,
      longitude:10
    }
  };
  const [locationData, setLocationData] = useState<ShopLocation>({ ...emptyForm });
  const {address,location} = locationData;
  const [locationErrorData, setLocationErrorData] = useState<ShopLocationError>({
    ...emptyForm,
  });
  const [currentUpdatingField, setCurrentUpdatingField] = useState<string>("");
  const onChange = (key: string, value: string) => {
    setCurrentUpdatingField(key);
    setLocationData((prev) => ({ ...prev, [key]: value }));
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
    const result = await postCall("/shop/add-location", locationData);

    if (!result?.status) {
      return result.data.forEach(({ path, message }: ValidationError) => {
        if (key === path) onErrorChange(path, message);
      });
    }
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await postCall("shop/add-location", locationData);
    if (!result?.status) {
      console.log(result.data);
      return result.data.forEach(({ path, message }: ValidationError) => {
        onErrorChange(path, message);
      });
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Where is Your Shop Located ?</div>
      <div className="location-container">
      <form onSubmit={submit}>
        <div className="input-wrapper">
          <InputField
            label="Location"
            value=""
            onChange={(value) => onChange("location", value)}
          />
          <InputField
            label="Address"
            type="textarea"
            value={address}
            error={locationErrorData.address}
            onChange={(value) => onChange("address", value)}
          />
        </div>
        </form>
      </div>
    </div>
  );
};

export default Shoplocation;
