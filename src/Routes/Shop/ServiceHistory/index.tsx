import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingCard from "../../../Components/BookingCard";

import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import { BookingData } from "../../../Types/Booking";
import filtering from "../../../assets/Icons/filtering.svg";
import historyToggle from "../../../assets/Icons/history-toggle.svg";
import completeIcon from "../../../assets/Icons/complete-icon.svg";
import IconButton from "../../../Components/Buttons/IconButton";
import { ShopLayOutProps } from "../../../Types/Props";
import BookingDetailedView from "../../../Components/BookingDetaildView";

interface PropsTypes {
  setShopLayOutProps: Dispatch<SetStateAction<ShopLayOutProps>>;
}
const data: Array<BookingData> = [
  {
    title: "Hair cutting",
    time: "11:30",
    duration: 20,
    rate: 10,
    name: "Ashik",
    phone: 8086520327,
  },
  {
    title: "Hair cutting",
    time: "11:30",
    duration: 20,
    rate: 10,
    name: "Ashik",
    phone: 8086520327,
  },
  {
    title: "Hair cutting",
    time: "11:30",
    duration: 20,
    rate: 10,
    name: "Ashik",
    phone: 8086520327,
  },
  {
    title: "Hair cutting",
    time: "11:30",
    duration: 20,
    rate: 10,
    name: "Ashik",
    phone: 8086520327,
  },
  
];

const ServiceHistory = ({ setShopLayOutProps }: PropsTypes) => {
  useEffect(() => {
    setShopLayOutProps((prev) => ({
      ...prev,
      hideBackButton: true,
    }));

    //ReSet Props For The LayOut
    return () => {
      setShopLayOutProps((prev) => ({
        ...prev,
        hideBackButton: false,
      }));
    };
  }, []);

  const [bookingsHistory, setBookingsHistory] =
    useState<Array<BookingData>>(data);

  const navigate = useNavigate();

  return (
    <div className="waper-main-container">
        <div className="history-complete-button">
        <ButtonWithIcon
          type="noBorder"
          label="Completed"
          leftIcon={completeIcon}
        />
        <IconButton type="black" icon={historyToggle} label="Cancelled" />
      </div>

      {bookingsHistory.map((booking: BookingData, i) => (
        <BookingCard {...booking} />
      ))}
      <div className="filter-button"> 
        <ButtonWithIcon
          type="black"
          label="Filter"
          leftIcon={filtering}
          onClick={() => {
            navigate("/shop/filter-list");
          }}
        />
      </div> 
      <div className="bookingcard-waper">
        <BookingDetailedView
          time="11"
          title="HairCuting"
          duration={30}
          rate={100}
          name="Shini"
          phone={999598463}
        />
        <BookingDetailedView
          time="11"
          title="HairCuting"
          duration={30}
          rate={100}
          name="Shini"
          phone={999598463}
        />
      </div>
    </div>
  );
};

export default ServiceHistory;
