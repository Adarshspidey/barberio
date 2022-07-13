import { Outlet } from "react-router-dom";
import BackButton from "../../Buttons/BackButton";
import BigButton from "../../Buttons/BigButton";
import SidePaneNavigator from "../../SidePaneNavigator";
import "./style.css";

interface PropsType {
  buttonType: "primary" | "orange";
  buttonLabel: string;
  goto: () => void;
  pageIndex: number;
}

const ShopSetupLayout = ({
  buttonType,
  buttonLabel,
  goto,
  pageIndex,
}: PropsType) => {

  return (
    <div className="home-container setup-container">
      <div className="home-header-image"></div>
      <div className=" home-setup-body-container"></div>
      <div className="setup-section-container">
        <div className="back-button-left">
          <BackButton />
        </div>
        <div className="setup-body-oulet">
          <Outlet />
        </div>
        <div className="button-bottom-wrapper">
          <BigButton type={buttonType} label={buttonLabel} onClick={goto} />
        </div>
        <div className="side-pane-navigator">
          <SidePaneNavigator pageIndex={pageIndex} />
        </div>
      </div>
    </div>
  );
};

export default ShopSetupLayout;
