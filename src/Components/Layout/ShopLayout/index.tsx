import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";
import Header from "../../Header";
import Footer from "../../Footer";
import { ShopLayOutProps } from "../../../Types/Props";
import BackButton from "../../Buttons/BackButton";
import Sidepain from "../../Sidepain";

const ShopLayout = ({
  activePath,
  hideBackButton = false,
}: ShopLayOutProps) => {
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
    </div>
  );
};

export default ShopLayout;
