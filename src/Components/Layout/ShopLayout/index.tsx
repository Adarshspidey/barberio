import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";
import Header from "../../Header";
import Footer from "../../Footer";
import { ShopLayOutProps } from "../../../Types/Props";
import BackButton from "../../Buttons/BackButton";
import Sidepain from "../../Sidepain";
import DeletePopup from "../../DeletePopup";
import PopUpForm from "../../PopUpForm";
interface PropsTypes {
  IsPopUp?: boolean;
}
const ShopLayout = ({
  activePath,
  hideBackButton = false,
}: ShopLayOutProps,{IsPopUp=false}:PropsTypes) => {
  const navigate = useNavigate();
  return (
    <div className="shop-main-layout-container">
      <Header />

      {!hideBackButton && (
        <div className="back-button-left-shop">
          <BackButton />
        </div>
      )}
      <div className="footer-sidepain">
        <Sidepain />
        <div className="shop-outlet">
          <Outlet />{" "}
        </div>
      </div>
        
      <Footer activePath={activePath} />
      {/* <PopUpForm/> */}
      {IsPopUp&&
      <DeletePopup IsPopUp={IsPopUp} />
      }
    </div>
  );
};

export default ShopLayout;
