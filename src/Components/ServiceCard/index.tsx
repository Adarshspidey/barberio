import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import SmallButton from '../Buttons/SmallButton';
import paidIcon from "../../assets/Icons/paid.svg";
import rupee from "../../assets/Icons/money.svg";
import paid from "../../assets/Icons/paidsymbol.svg";
interface ServicecardProps {
    title: string
    description:string;
    rate:number;

  }
const ServiceCard = ({title,description,rate}:ServicecardProps) => {
  const[isEnable,setIsEnable] = useState(false);
    const navigate = useNavigate();

    const handleEnable = () =>{
      setIsEnable(true)
    }
   
  return (

    <div className='service-card'>
      <div>
        <div className='service-card-title-container'>
          <div className='service-title'>{title}</div>
          <div>
            {isEnable ? (
            <div className="service-active-button service-inactive-button">
            <SmallButton
              type='disable'
              label='Disable'
              onClick={() => {
                navigate("/shop/service/disable-service");
              }}
            />
            </div>
            
            ):(
            <div className="service-active-button"onClick={handleEnable}>
             <SmallButton
                type='enable'
                label='Enable'
                onClick={()=>{}}
                />
            </div>
            )
            }
          </div>
        </div>
        <div className='service-discripton-container'>
          <div className='service-description'>{description}</div>
          <div>
          <div className="service-list-duration">20 Min</div>
          <div className="booking-card-details">
            <img src={paidIcon} alt="paid" width={16} />
            <div>
              <img src={rupee} alt="paid" width={6} />
            </div>
            <div>{rate}</div>
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ServiceCard