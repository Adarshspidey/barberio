import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/Buttons/BackButton";
import SmallButton from "../../../Components/Buttons/SmallButton";

const DetailedBookingView = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="wrapper-flex-justify-content">
        <SmallButton
          type="orange"
          label="Seat"
          onClick={() => {
            navigate("/shop/booking/seat");
          }}
        />
        <BackButton />
      </div>

      <div>Select days</div>
    </div>
  );
};

export default DetailedBookingView;
