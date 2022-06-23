import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import ServiceListCard from "../../../Components/ServiceListCard";
import addIcon from "../../../assets/Icons/Add.svg";
const AddService = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Add Services</div>
      <div className="content-end">
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
      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/schedule-time");
          }}
        />
      </div>
    </div>
  );
};

export default AddService;
