import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bookingActive from "../../../assets/Icons/Booking-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const BookingSeatView = ({ setActiveIcon, setIconPath }: PropsType) => {
  useEffect(() => {
    setActiveIcon(bookingActive);
    setIconPath("booking");
  });

  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>{" "}
      <button
        onClick={() => {
          navigate("/shop/detailed-booking");
        }}
      >
        Service
      </button>
      <button>Disable Queue</button>
      <h1>Seats</h1>
      <button
        onClick={() => {
          navigate("/shop/disable-service");
        }}
      >
        Disable
      </button>
    </div>
  );
};

export default BookingSeatView;
