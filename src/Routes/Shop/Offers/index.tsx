import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {useState} from "react";
import OfferCard from "../../../Components/OfferCard";
type OfferData = {
  title:string;
  offer:number;
}

const data: Array<OfferData> = [
  {
    title: "Hair cutting",
    offer: 10
  }
]
const Offers = () => {
  const [offers, setOffers]= useState<Array<OfferData>>(data);
  const navigate = useNavigate();
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
      {offers.map((offers:OfferData,i)=><OfferCard {...offers}/>)}
      <Outlet />
    </div>
  );
};

export default Offers;
