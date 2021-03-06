import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import ServiceListCard from "../../../Components/ServiceListCard";
import addIcon from "../../../assets/Icons/Add.svg";
import { ShopSetupLayOutProps } from "../../../Types/Props";
import PopUpForm from "../../../Components/PopUpForm";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const AddService = ({ setShopSetupLayoutProps }: PropsType) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 4,
      goto: () => {
        navigate("/setup/schedule-time");
      },
    }));
  }, []);

  const [serviceList,setServiceList] = useState([]);

  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Add Services</div>
      <div className="button-end-with-margin">
        <ButtonWithIcon
          rightIcon={addIcon}
          type="white"
          label="Add"
          onClick={() => {
            navigate("/setup/add-service-form");
          }}
        />
      </div>
      <div className="service-list">
        <ServiceListCard />
        <ServiceListCard />
      </div>
      {/* <PopUpForm/> */}
    </div>
  );
};

export default AddService;
