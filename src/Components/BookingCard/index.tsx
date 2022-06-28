import { useState } from "react";
import arrowUp from "../../assets/Icons/arrow-up.svg";
import arrowDown from "../../assets/Icons/arrow-down.svg";
import clock from "../../assets/Icons/small-clock.svg";
import paidIcon from "../../assets/Icons/paid.svg";
import rupee from "../../assets/Icons/money.svg";
import paid from "../../assets/Icons/paidsymbol.svg";
import chair from "../../assets/Icons/Chair.svg";
import profile from "../../assets/Icons/profileicon.svg";
import phoneicon from "../../assets/Icons/phoneIcon.svg";
interface BookingcardProps {
  title: string;
  time: string;
  duration: number;
  rate: number;
  name: string;
  phone: number;
}

const BookingCard = ({
  title,
  time,
  duration,
  rate,
  name,
  phone,
}: BookingcardProps) => {
  const [isDetailed, setIsDetailed] = useState<boolean>(false);
  return (
    <div className="booking-card-waper">
    <div className="booking-card-component">
      <div>
        <div className="booking-card-component-group">
          <div className="booking-card-title">{title}</div>
          <div className="booking-carditime">{time} AM</div>
        </div>
        <div className="booking-card-duration-component">
          {!isDetailed && (
            <div className="booking-card-duration">
              <img src={clock} alt="clock" />
              {duration} Min
            </div>
          )}
          {!isDetailed && (
            <div className="booking-card-arrowdown">
              <img
                src={arrowDown}
                alt="arrow"
                onClick={() => setIsDetailed(!isDetailed)}
              />
            </div>
          )}
        </div>
      </div>

      {isDetailed && (
        <>
          <div className="booking-card-duration-component">
            <div className="booking-card-duration">
              <img src={clock} alt="clock" /> Duration : {duration} Min
            </div>
            <div className="booking-card-arrowdown">
              <img
                src={arrowUp}
                alt="arrow"
                onClick={() => setIsDetailed(!isDetailed)}
              />
            </div>
          </div>

          <div>
            <div className="booking-card-details">
              <img src={paidIcon} alt="paid" width={16} />
              <div>
                <img src={rupee} alt="paid" width={6} />
              </div>
              <div>{rate}</div>
            </div>
          </div>
          <div className="booking-card-details paid">
            <img src={paid} alt="paidmoney" width={17} />
            <div>Paid</div>
          </div>

          <div className="booking-card-user">
            <div className="booking-card-user-details">
              <div className="booking-profile">
                <img src={profile} alt="profile" />
                {name}
              </div>
              <div className="booking-profile">
                <img src={phoneicon} alt="profile" />
                {phone}
              </div>
            </div>
            <div className="booking-seat-number">
              <img src={chair} alt="chair" />
              <div className="booking-seat-number-count">1</div>
            </div>
          </div>
          {/* <div>Service Status: Completed</div> */}
        </>
      )}
    </div>
    </div> 
  );
};

export default BookingCard;
