import {useState} from 'react'
import BookingCard from '../../../Components/BookingCard';
import { useNavigate } from "react-router-dom";
import {BookingData} from "../../../Types/Booking";

const data: Array<BookingData> = [
  {
    title: "Hair cutting",
    duration: 20,
    rate: 10,
    name: "Ashik",
    phone: 8086520327
  },{
    title: "Hair cutting",
    duration: 20,
    rate: 10,
    name: "Ashik",
    phone: 8086520327
  }
];



const Bookings = () => {
  const [bookings, setBookings]= useState<Array<BookingData>>(data);

  
  const navigate = useNavigate();
  return (
    <div>
      <button 
       onClick={() => {
        navigate("/shop/detailed-booking");

      }}
      >All</button>
      {bookings.length < 1 && <div>No bookings available</div>}
      {bookings.map((booking:BookingData,i)=><BookingCard {...booking} />)}
    
    </div>
  )
}

export default Bookings
