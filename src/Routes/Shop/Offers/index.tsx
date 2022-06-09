import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import OfferCard from "../../../Components/OfferCard";
import profileActive from "../../../assets/Icons/Profile-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

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
const Offers = ({ setActiveIcon, setIconPath }: PropsType) => {
  const [offers, setOffers] = useState<Array<OfferData>>(data);

  const navigate = useNavigate();

  useEffect(() => {
    setActiveIcon(profileActive);
    setIconPath("profile");
  });

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate("/shop/add-offers");
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
