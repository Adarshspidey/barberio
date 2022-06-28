import { Outlet, useNavigate } from "react-router-dom";
import BackButton from "../../Buttons/BackButton";
import BigButton from "../../Buttons/BigButton";
import "./style.css";

interface PropsType {
  buttonType: "primary" | "orange";
  buttonLabel: string;
  goto: () => void;
}

const ShopSetupLayout = ({ buttonType, buttonLabel, goto }: PropsType) => {
  const navigate = useNavigate();
  return (
    <div className="home-container setup-container">
      <div className="home-header-image"></div>
      <div className=" home-setup-body-container"></div>
      <div className="setup-section-container">
        <div className="back-button-left">
          <BackButton />
        </div>
        <Outlet />

        <div className="button-bottom-wrapper">
          <BigButton type={buttonType} label={buttonLabel} onClick={goto} />
        </div>
      </div>
    </div>
  );
};

export default ShopSetupLayout;
