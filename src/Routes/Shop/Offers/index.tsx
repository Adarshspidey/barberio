import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import OfferCard from "../../../Components/OfferCard";
import BackButton from "../../../Components/Buttons/BackButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import plus from "../../../assets/Icons/add-plus.svg";

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
      {/* <div className="button-end"> <BackButton /></div> */}
      <div className="button-end-with-margin">
        <ButtonWithIcon
          label="Add"
          rightIcon={plus}
          type="white"
          onClick={() => {
            navigate("/shop/profile/add-offers");
          }}
        />
      </div>
      {offers.map((offers: OfferData, i) => (
        <OfferCard {...offers} />
      ))}
      <OfferCard title="HairCutting" offer={10} />
      <Outlet />
    </div>
  );
};

export default Offers;
