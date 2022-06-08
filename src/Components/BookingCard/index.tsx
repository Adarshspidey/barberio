import React from "react";
import {useState} from 'react'

interface BookingcardProps {
  title: string,
  duration: number,
  rate:number,
  name:string,
  phone:number
}

const BookingCard = ({title, duration,rate,name,phone}: BookingcardProps) => {
  const [isDetailed, setIsDetailed] = useState(false);
  return (
  <div>
    <div 
      onClick={()=>setIsDetailed(!isDetailed)}
    >{title}</div>
    { isDetailed && 
    <>
    <div>Duration : {duration}</div>
    <div>{rate}</div>
    <div>Paid</div>
    <div>
      <div>{name}</div>
      <div>{phone}</div>
    </div>
    <div>Service Status: Completed</div>
    </>
    }
  </div>
  )
};

export default BookingCard;
