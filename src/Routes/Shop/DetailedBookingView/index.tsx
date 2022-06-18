import React from "react";
import { useNavigate } from "react-router-dom";

const DetailedBookingView = () => {
  const navigate = useNavigate();
  return (
    <div>
      DetailedBookingView
      <button
        onClick={() => {
          navigate("/shop/booking/seat");
        }}
      >
        Seat
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div>Select days</div>
    </div>
  );
};

export default DetailedBookingView;
