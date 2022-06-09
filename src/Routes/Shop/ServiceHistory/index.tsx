import { useState } from "react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BookingCard from "../../../Components/BookingCard";
import HistoryActive from "../../../assets/Icons/History-active.svg";

import { BookingData } from "../../../Types/Booking";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const data: Array<BookingData> = [
  {
    title: "Hair cutting",
    duration: 20,
    rate: 10,
    name: "Ashik",
    phone: 8086520327,
  },
  {
    title: "Hair cutting",
    duration: 20,
    rate: 10,
    name: "Ashik",
    phone: 8086520327,
  },
];

const ServiceHistory = ({ setActiveIcon, setIconPath }: PropsType) => {
  const [bookingsHistory, setBookingsHistory] =
    useState<Array<BookingData>>(data);

  const navigate = useNavigate();

  useEffect(() => {
    setActiveIcon(HistoryActive);
    setIconPath("history");
  });

  return (
    <div>
      <div>Completed</div>
      {bookingsHistory.map((booking: BookingData, i) => (
        <BookingCard {...booking} />
      ))}
      <button
        onClick={() => {
          navigate("/shop/filter-list");
        }}
      >
        filter
      </button>
    </div>
  );
};

export default ServiceHistory;
