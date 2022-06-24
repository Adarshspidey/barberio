import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";
import profileIcon from "../../../assets/Icons/Profile.svg";
import scanIcon from "../../../assets/Icons/scan.svg";
import bookingIcon from "../../../assets/Icons/booking.svg";
import historyIcon from "../../../assets/Icons/history.svg";
import servicesIcon from "../../../assets/Icons/Services.svg";
import Header from "../../Header";
import Footer from "../../Footer";
import { ShopLayOutProps } from "../../../Types/Props";
import BackButton from "../../Buttons/BackButton";


const ShopLayout = ({activePath,hideBackButton = false,}: ShopLayOutProps) => {
  const navigate = useNavigate();
  return (
    <div className="shop-main-layout-container">
      <Header />
      {!hideBackButton && (
        <div className="back-button-left-shop">
          <BackButton />
        </div>
      )}
      <Outlet />
      <Footer activePath={activePath} />
    </div>
  );
};

export default ShopLayout;
