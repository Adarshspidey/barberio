import React from "react";
import { useNavigate } from "react-router-dom";
import arrowRight from "../../assets/Icons/arrow-right.svg";
import clockSmall from "../../assets/Icons/small-clock.svg";

interface OffercardProps {
  title: string;
  time: string;
}

const NotificationCard = ({ title, time }: OffercardProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/shop/notification-body");
      }}
    >
      {title}
      <img src={arrowRight} alt="arrow" />
      <div>
        <img src={clockSmall} alt="clock" />
        {time}
      </div>
    </div>
  );
};

export default NotificationCard;
