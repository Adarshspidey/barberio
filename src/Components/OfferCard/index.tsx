import React from 'react'
import { useNavigate } from "react-router-dom";
interface OffercardProps {
    title: string,
    offer: number
  }
const OfferCard = ({title,offer}:OffercardProps) => {
    const navigate = useNavigate();
  return (
    <div className="booking-card-component">
      <div className="booking-card-duration-component">
       <div className="booking-card-title">{title}</div>
        <div className='offer-rate'>{offer} % off
        </div>
        </div>
        
    </div>
  )
}

export default OfferCard