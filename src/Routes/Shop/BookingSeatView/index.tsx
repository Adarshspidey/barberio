import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/Buttons/BackButton";
import SmallButton from "../../../Components/Buttons/SmallButton";
import Calendar from "../../../Components/Calendar";

const BookingSeatView = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="wrapper-flex-justify-content">
        <SmallButton
          type="orange"
          label="Seat"
          onClick={() => {
            navigate("/shop/booking");
          }}
        />
        <BackButton />
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

      <Calendar />
      <SmallButton
        type="yellow"
        label="Disable"
        onClick={() => {
          navigate("/shop/disable-service");
        }}
      />
    </div>
  );
};

export default BookingSeatView;
