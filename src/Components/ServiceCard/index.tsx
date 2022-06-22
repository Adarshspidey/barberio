import React from 'react'
import { useNavigate } from "react-router-dom";
import SmallButton from '../Buttons/SmallButton';
interface ServicecardProps {
    title: string
  }
const ServiceCard = ({title}:ServicecardProps) => {
    const navigate = useNavigate();
  return (
    <div className="booking-card-component">
      <div className="booking-card-duration-component">
      <div className="booking-card-title">{title}</div>
        <SmallButton 
        type="black"
        label="Disable"
        onClick={() => {
              navigate("/shop/service/disable-service");
            }}/>
      </div>
    </div>
  )
}

export default ServiceCard