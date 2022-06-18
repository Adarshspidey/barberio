import { Outlet } from "react-router-dom";
import BackButton from "../../Buttons/BackButton";

interface PropsType {
  headerImage: string;
  hideBackButton?: boolean;
}

const HomeLayout = ({ headerImage,hideBackButton=false }: PropsType) => {
  return (
    <div className="home-container">
      <div className="home-header-image">
        <img src={headerImage} alt="login" />
      </div>
      <div className="home-body-container">
        {!hideBackButton
        &&
        <div className="back-button-left">
          <BackButton/>
        </div>}
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
