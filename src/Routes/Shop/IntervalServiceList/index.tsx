import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import IntervalListCard from "../../../Components/IntervalListCard";
import ServiceListComponent from "../../../Components/ServiceListComponent";
import { ShopSetupLayOutProps } from "../../../Types/Props";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const IntervalServiceList = ({ setShopSetupLayoutProps }: PropsType) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 6,
      goto: () => {
        navigate("/setup/interval");
      },
      buttonLabel: "Save",
    }));

    return () => {
      setShopSetupLayoutProps((prev) => ({
        ...prev,
        buttonLabel: "Next",
      }));
    };
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Select Service</div>
      <ServiceListComponent
        onClick={() => {
          navigate("/setup/interval-list");
        }}
      />
    </div>
  );
};

export default IntervalServiceList;
