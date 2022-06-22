import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import OfferCard from "../../../Components/OfferCard";
import BackButton from "../../../Components/Buttons/BackButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import plus from '../../../assets/Icons/add-plus.svg'

type OfferData = {
  title: string;
  offer: number;
};

const data: Array<OfferData> = [
  {
    title: "Hair cutting",
    offer: 10,
  },
];
const Offers = () => {
  const [offers, setOffers] = useState<Array<OfferData>>(data);

  const navigate = useNavigate();
  return (
    <div>
      <BackButton />
      <ButtonWithIcon
      label="Add"
      rightIcon={plus}
      type="white"
        onClick={() => {
          navigate("/shop/profile/add-offers");
        }}
      />
       
      {offers.map((offers: OfferData, i) => (
        <OfferCard {...offers} />
      ))}
      <Outlet />
    </div>
  );
};

export default Offers;
