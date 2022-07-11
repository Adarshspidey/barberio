import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileActive from "../../../assets/Icons/Profile-active.svg";
import BackButton from "../../../Components/Buttons/BackButton";
import BigButton from "../../../Components/Buttons/BigButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import IntervalListCard from "../../../Components/IntervalListCard";
import addplus from "../../../assets/Icons/add-plus.svg";
import SmallButton from "../../../Components/Buttons/SmallButton";
import CommonInterval from "../../../Components/CommonInterval";

const ScheduleWorkInterval = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CommonInterval
        onClickButton={() => {
          navigate("/shop/profile/service-interval-by-day");
        }}
        onClickList={() => {
          navigate("/shop/profile/schedule-interval-form");
        }}
      />
    </div>
  );
};

export default ScheduleWorkInterval;
