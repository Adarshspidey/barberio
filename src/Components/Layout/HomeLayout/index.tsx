import { Outlet } from "react-router-dom";
import "./style.css";

interface PropsType {
  headerImage: string;
}

const HomeLayout = ({ headerImage }: PropsType) => {
  return (
    <div className="login-container">
      <div className="login-image">
        <img src={headerImage} alt="login" />
      </div>

      <div className="login-container-content">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
