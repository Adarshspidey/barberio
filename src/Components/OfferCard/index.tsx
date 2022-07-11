import rupee from "../../assets/Icons/money.svg";
import paidIcon from "../../assets/Icons/paid.svg";
import { useNavigate } from "react-router-dom";
interface OffercardProps {
    title: string;
    offer: number;
    rate:number;
    description :string;
  }
const OfferCard = ({title,offer,rate,description}:OffercardProps) => {
    const navigate = useNavigate();
  return (
    <div className='service-card'>
      <div className="booking-card-container">
      <div>
        <div className='service-title'>{title}</div>
        <div className="warning-container">
          <div className="days-warning">2 days</div>
          <div className="time-warning">20 hr</div>
          <div className="mits-waring">30 min</div>
          <div className="left"> Left</div>
        </div>
        <div className='service-description'>{description}</div>
        </div>
      <div>
        <div className="offer-list">{offer}% off</div>
          <div className="booking-card-details">
            <img src={paidIcon} alt="paid" width={16} />
            <div className="rupee-image">
              <img src={rupee} alt="paid" width={8} />
            </div>
            <div className="rate-container">{rate}</div>
          </div>
      </div>
      </div>
      </div>
  )
}

export default OfferCard