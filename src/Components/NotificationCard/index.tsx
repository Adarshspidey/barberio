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
      className="notification-card"
      onClick={() => {
        navigate("/shop/notification-body");
      }}
    >
      <div>
        <div className="notification-header">{title}</div>
        <div className="time-wrapper">
          <img src={clockSmall} alt="clock" />
          {time}
        </div>
      </div>
      <img src={arrowRight} alt="arrow" />
    </div>
  );
};

export default NotificationCard;
