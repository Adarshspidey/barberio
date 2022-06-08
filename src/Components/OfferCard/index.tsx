import React from 'react'
import { useNavigate } from "react-router-dom";
interface OffercardProps {
    title: string,
    offer: number
  }
const OfferCard = ({title,offer}:OffercardProps) => {
    const navigate = useNavigate();
  return (
    <div>
       <div>{title}</div> 
        <div>{offer}</div>
        
    </div>
  )
}

export default OfferCard