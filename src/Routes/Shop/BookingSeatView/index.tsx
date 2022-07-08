import { useNavigate } from "react-router-dom";
import SmallButton from "../../../Components/Buttons/SmallButton";
import { SeatData } from "../../../Types/Booking";
import BookingCalendar from "../../../Components/Calendar/BookingCalendar";
import seatActive from "../../../assets/Icons/seat-active.svg";
import seatdisable from "../../../assets/Icons/seat-disable.svg";

const BookingSeatView = () => {
  const navigate = useNavigate();

  const seat: Array<SeatData> = [
    {
      seatNumber: 1,
      disable: false,
    },
    {
      seatNumber: 2,
      disable: false,
    },
    {
      seatNumber: 3,
      disable: true,
    },
    {
      seatNumber: 4,
      disable: false,
    },
  ];

  return (
    <div>
      <div className="wrapper-flex-justify-content">
        <SmallButton
          type="orange"
          label="Service"
          onClick={() => {
            navigate("/shop/booking");
          }}
        />
        {/* <BackButton /> */}
      </div>

      <div className="content-end-no-margin">
        <SmallButton
          type="yellow"
          label="Disable Queue"
          // onClick={() => {
          //   navigate("/shop/booking/detailed-booking");
          // }}
        />
      </div>
      <BookingCalendar />

      <div className="seat-button-wrapper">
        <div className="seat-wrapper">
          {seat.map((item, index) => (
            <div className="seats">
              <img
                src={`${item.disable === true ? seatdisable : seatActive}`}
                alt=""
              />
              <div className="seat-number">{item.seatNumber}</div>
            </div>
          ))}
        </div>
        <div className="seat-button-wrapper">
          <SmallButton
            type="yellow"
            label="Disable"
            onClick={() => {
              navigate("/shop/disable-service");
            }}
          />
        </div>
      </div>
      <div className="time-container">
        <div>AM
       <div className="time-line"></div></div>
       <div> PM
       <div className="time-line"></div></div> 
      </div>
    </div>
  );
};

export default BookingSeatView;
