import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/Buttons/BackButton";
import SmallButton from "../../../Components/Buttons/SmallButton";
import Calendar from "../../../Components/Calendar";

interface PropsType {
  setShowAll: Dispatch<SetStateAction<boolean>>;
}

const DetailedBookingView = ({ setShowAll }: PropsType) => {
  const navigate = useNavigate();
  return (
    <div className="detailed-booking">
      <div className="wrapper-flex-justify-content">
        <SmallButton
          type="orange"
          label="Seat"
          onClick={() => {
            navigate("/shop/booking/seat");
          }}
        />
        <BackButton onClick={() => setShowAll(false)} />
      </div>

      <Calendar />
    </div>
  );
};

export default DetailedBookingView;
