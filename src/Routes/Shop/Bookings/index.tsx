import { useState, Dispatch, SetStateAction, useEffect } from "react";
import BookingCard from "../../../Components/BookingCard";
import { useNavigate } from "react-router-dom";
import { BookingData } from "../../../Types/Booking";
import bookingActive from "../../../assets/Icons/Booking-active.svg";
import SmallButton from "../../../Components/Buttons/SmallButton";
import DetailedBookingView from "../DetailedBookingView";

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

const Bookings = () => {
  const [bookings, setBookings] = useState<Array<BookingData>>(data);

  const [showAll, setShowAll] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <div>
      {!showAll && (
        <div className="content-end">
          <SmallButton
            type="white"
            label="All"
            onClick={() => {
              setShowAll(true);
              // navigate("/shop/booking/detailed-booking");
            }}
          />
        </div>
      )}

      {showAll && <DetailedBookingView setShowAll={setShowAll} />}

      {bookings.length < 1 && <div>No bookings available</div>}
      {bookings.map((booking: BookingData, i) => (
        <BookingCard {...booking} />
      ))}
    </div>
  );
};

export default Bookings;
