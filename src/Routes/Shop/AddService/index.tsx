import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import SmallButton from "../../../Components/Buttons/SmallButton";
import ServiceListCard from "../../../Components/ServiceListCard";

const AddService = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SmallButton
        type="white"
         label="Add +"
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
