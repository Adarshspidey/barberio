import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import OfferCard from "../../../Components/OfferCard";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import plus from "../../../assets/Icons/add-plus.svg";

type OfferData = {
  title: string;
  offer: number;
  rate :number;
  description :string;

};

const data: Array<OfferData> = [
  {
    title: "Hair cutting",
    description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ut a sodales aenean cras. Sed vel proin porta enim curabitur augue magna ut.",
    offer: 10,
    rate : 100,
  },
];
const Offers = () => {
  const [offers, setOffers] = useState<Array<OfferData>>(data);

  const navigate = useNavigate();
  return (
    <div>
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
      <Outlet />
    </div>
  );
};

export default Offers;
