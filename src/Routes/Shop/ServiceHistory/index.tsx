import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingCard from "../../../Components/BookingCard";
import { BookingData } from "../../../Types/Booking";



const data: Array<BookingData> = [
  {
    title: "Hair cutting",
    time: "11:30",
    duration: 20,
    rate: 10,
    name: "Ashik",
    phone: 8086520327,
  },
  {
    title: "Hair cutting",
    time: "11:30",
    duration: 20,
    rate: 10,
    name: "Ashik",
    phone: 8086520327,
  },
];

const ServiceHistory = () => {
  const [bookingsHistory, setBookingsHistory] =
    useState<Array<BookingData>>(data);

  const navigate = useNavigate();

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
