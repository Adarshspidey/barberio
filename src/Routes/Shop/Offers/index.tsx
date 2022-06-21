import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import OfferCard from "../../../Components/OfferCard";
import BackButton from "../../../Components/Buttons/BackButton";

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
      <button
        onClick={() => {
          navigate("/shop/profile/add-offers");
        }}
      >
        Add+
      </button>
      {offers.map((offers: OfferData, i) => (
        <OfferCard {...offers} />
      ))}
      <Outlet />
    </div>
  );
};

export default Offers;
