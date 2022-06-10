import React from "react";
import { useState } from "react";
import arrowUp from "../../assets/Icons/arrow-up.svg";
import arrowDown from "../../assets/Icons/arrow-down.svg";
import clock from "../../assets/Icons/small-clock.svg";

interface BookingcardProps {
  title: string;
  time: string;
  duration: number;
  rate: number;
  name: string;
  phone: number;
}

const BookingCard = ({
  title,
  time,
  duration,
  rate,
  name,
  phone,
}: BookingcardProps) => {
  const [isDetailed, setIsDetailed] = useState(false);
  return (
    <div>
      <div onClick={() => setIsDetailed(!isDetailed)}>
        {title}
        {time}
        <img src={`${isDetailed === true ? arrowUp : arrowDown}`} alt="arrow" />
        {!isDetailed && (
          <div>
            {duration} minutes <img src={clock} alt="clock" />
          </div>
        )}
      </div>
      {isDetailed && (
        <>
          <div>
            <img src={clock} alt="clock" /> Duration : {duration} min
          </div>
          <div>{rate}</div>
          <div>Paid</div>
          <div>
            <div>{name}</div>
            <div>{phone}</div>
          </div>
          <div>Service Status: Completed</div>
        </>
      )}
    </div>
  );
};

export default BookingCard;
