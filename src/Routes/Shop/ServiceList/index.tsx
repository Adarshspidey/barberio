import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../../../Components/ServiceCard";
import ServiceListCard from "../../../Components/ServiceListCard";

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
      Services <br />
      <button
        onClick={() => {
          navigate("/shop/service/add-service-form");
        }}
      >
        Add
      </button>
      {services.map((services: ServiceData, i) => (
        <ServiceCard {...services} />
      ))}
    </div>
    
  );
};

export default ServiceList;
