import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import SmallButton from "../../../Components/Buttons/SmallButton";
import ServiceListCard from "../../../Components/ServiceListCard";
import addIcon from '../../../assets/Icons/Add.svg'
const AddService = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ButtonWithIcon
        rightIcon={addIcon}
         label="Add"
        onClick={() => {
        navigate("/setup/add-service-form");
      }} />
      <div className="service-list">
      <ServiceListCard/>
      <ServiceListCard/>
      </div>
      <BigButton
        type="primary"
        label="Next"
        onClick={() => {
          navigate("/setup/schedule-time");
        }}
      />
       
    </div>
  );
};

export default AddService;
