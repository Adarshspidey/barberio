import { Outlet, useNavigate } from "react-router-dom";
import BackButton from "../../Buttons/BackButton";
import "./style.css";

const ShopSetupLayout = () => {
  return (
    <div className="home-container setup-container">
      <div className="home-header-image">
      </div>
      <div className=" home-setup-body-container">
      </div>
      <div className="setup-section-container">
        <div className="back-button-left">
          <BackButton/>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ShopSetupLayout;
