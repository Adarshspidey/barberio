import React from 'react'
import { useNavigate } from "react-router-dom";
interface ServicecardProps {
    title: string
  }
const ServiceCard = ({title}:ServicecardProps) => {
    const navigate = useNavigate();
  return (
    <div>
        {title}
        <button onClick={() => {
              navigate("/shop/disable-service");
            }}>disable</button>
    </div>
  )
}

export default ServiceCard