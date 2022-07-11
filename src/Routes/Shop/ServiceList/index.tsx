import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import ServiceCard from "../../../Components/ServiceCard";
import addIcon from "../../../assets/Icons/Add.svg";

import { ShopLayOutProps } from "../../../Types/Props";

interface PropsTypes {
  setShopLayOutProps: Dispatch<SetStateAction<ShopLayOutProps>>;
}

type ServiceData = {
  title: string;
  description:string;
  rate:number;
};
const data: Array<ServiceData> = [
  {
    title: "Hair cutting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum lacus, interdum vel viverra quis, rutrum sed odio.",
    rate:100,
  },
  {
    title: "Spa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum lacus, interdum vel viverra quis, rutrum sed odio.",
    rate:100
  },
];
const ServiceList = ({ setShopLayOutProps }: PropsTypes) => {
  const [services, setServicess] = useState<Array<ServiceData>>(data);
  const navigate = useNavigate();

  useEffect(() => {
    setShopLayOutProps((prev) => ({
      ...prev,
      hideBackButton: true,
    }));

    //ReSet Props For The LayOut
    return () => {
      setShopLayOutProps((prev) => ({
        ...prev,
        hideBackButton: false,
      }));
    };
  }, []);

  return (
    <div className="waper-main-container">
      <div className="wrapper-flex-justify-content">
        <div className="edit-profile-title">Services</div>
        <ButtonWithIcon
          type="white"
          rightIcon={addIcon}
          label="Add"
          onClick={() => {
            navigate("/shop/service/add-service");
          }}
        />
      </div>
      <div className="service-wrapper">
        {services.map((services: ServiceData, i) => (
          <ServiceCard {...services} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
