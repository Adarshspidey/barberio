import searchIcon from "../../assets/Icons/search.svg";
import notificationIcon from "../../assets/Icons/notifications.svg";
import logoImage from "../../assets/Icons/logo.svg";

const Header = () => {
  return (
    <div className="header-container">
        <div className="logo-image">
            <img src={logoImage} alt="Barberio" />
        </div>
        <div className="header-left-icons">
            <div className="header-left-icon">
                <img src={searchIcon} alt="Search" />
            </div>
            <div className="header-left-icon">
                <img src={notificationIcon} alt="Notifications" />
            </div>
        </div>
    </div>
  )
}

export default Header;