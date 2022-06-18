import searchIcon from "../../assets/Icons/search.svg";
import notificationIcon from "../../assets/Icons/notifications.svg";
import logoImage from "../../assets/Icons/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="logo-image">
        <img
          onClick={() => {
            navigate("/shop/booking");
          }}
          src={logoImage}
          alt="Barberio"
        />
      </div>
      <div className="header-left-icons">
        <div className="header-left-icon">
          <img src={searchIcon} alt="Search" />
        </div>
        <div className="header-left-icon">
          <img
            onClick={() => {
              navigate("/shop/notification-list");
            }}
            src={notificationIcon}
            alt="Notifications"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
