import React from "react";
import { useNavigate } from "react-router-dom";
import arrowRight from "../../assets/Icons/arrow-right.svg";
import clockSmall from "../../assets/Icons/small-clock.svg";

interface OffercardProps {
  title: string;
  time?: string;
  onClick?: () => void;
}

const NotificationCard = ({ title, time, onClick }: OffercardProps) => {
  const navigate = useNavigate();
  return (
    <div className="notification-card" onClick={onClick}>
      <div>
        <div className="notification-header">{title}</div>
        {time && (
          <div className="time-wrapper">
            <img src={clockSmall} alt="clock" />
            {time}
          </div>
        )}
      </div>
      <img src={arrowRight} alt="arrow" />
    </div>
  );
};

export default NotificationCard;
