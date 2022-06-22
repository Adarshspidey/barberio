import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import ServiceCard from "../../../Components/ServiceCard";
import addIcon from '../../../assets/Icons/Add.svg'

type ServiceData = {
  title: string;
};
const data: Array<ServiceData> = [
  {
    title: "Hair cutting",
  },
  {
    title: "Spa",
  },
];
const ServiceList = () => {
  const [services, setServicess] = useState<Array<ServiceData>>(data);
  const navigate = useNavigate();

  return (
    <div>
      <div className="wrapper-flex-justify-content">
      Services 
      <ButtonWithIcon
        rightIcon={addIcon}
        label="Add"
        onClick={() => {
          navigate("/shop/service/add-service-form");
        }}
      />
      </div>
      {services.map((services: ServiceData, i) => (
        <ServiceCard {...services} />
      ))}
    </div>
    
  );
};

export default ServiceList;
