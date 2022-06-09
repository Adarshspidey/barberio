import { useState } from "react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import serviceActive from "../../../assets/Icons/Service-active.svg";
import ServiceCard from "../../../Components/ServiceCard";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

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
const ServiceList = ({ setActiveIcon, setIconPath }: PropsType) => {
  const [services, setServicess] = useState<Array<ServiceData>>(data);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIcon(serviceActive);
    setIconPath("service");
  });

  return (
    <div>
      Services <br />
      <button
        onClick={() => {
          navigate("/shop/add-service-form");
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
