import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import time from "../../../assets/Icons/time.svg";
import arrow from "../../../assets/Icons/arrow-down.svg";
import BigButton from "../../../Components/Buttons/BigButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import { ShopSetupLayOutProps } from "../../../Types/Props";
import ServiceCalender from "../../../Components/Calendar/ServiceCalender";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const ScheduleTime = ({ setShopSetupLayoutProps }: PropsType) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 5,
      goto: () => {
        navigate("/setup/interval");
      },
    }));
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Schedule Your Worktime</div>

      <div className="button-end-margin-top">
        <ButtonWithIcon
          type="white"
          label="Schedule by Day"
          onClick={() => {
            navigate("/setup/schedule-by-day");
          }}
        />
      </div>

      <div><ServiceCalender/></div>
      
      <div className="input-wrapper">
        <InputField
          label="Start Time"
          onChange={() => {}}
          value=""
          icon={time}
          arrow={arrow}
        />

        <InputField
          label="End Time"
          onChange={() => {}}
          value=""
          icon={time}
          arrow={arrow}
        />
      </div>

      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/interval");
          }}
        />
      </div>
    </div>
  );
};

export default ScheduleTime;
