import profileIcon from "../../assets/Icons/Profile.svg";
import qrIcon from "../../assets/Icons/qr-scan-icon.svg";
import bookingIcon from "../../assets/Icons/booking.svg";
import historyIcon from "../../assets/Icons/history.svg";
import servicesIcon from "../../assets/Icons/Services.svg";
import bookingActive from "../../assets/Icons/Booking-active.svg";
import profileActive from "../../assets/Icons/Profile-active.svg";
import historyActive from "../../assets/Icons/History-active.svg";
import serviceActive from "../../assets/Icons/Service-active.svg";
import { ShopFooterPropsTypes } from "../../Types/Props";
import { useNavigate } from "react-router-dom";


const Footer = ({activePath}:ShopFooterPropsTypes) => {
    const navigate = useNavigate();
  return (
    <div className="menu-footer-section">
        <div className="left-footer-menu-icons">
            <div
                className="footer-menu-icon"
                onClick={()=>navigate("/shop/profile")}
                >
                <img src={
                    activePath === "Profile" ? profileActive : profileIcon
                    } alt="Profile" />
            </div>
            <div className="footer-menu-icon"
                onClick={()=>navigate("/shop/service")}
                >
                <img src={
                    activePath === "Service" ? serviceActive : servicesIcon
                } alt="Services" />
            </div>
        </div>
        <div
            className="footer-center-menu-icon-box"
            >
                <div
                    className="footer-center-menu-icon"
                    style={{
                        backgroundImage: `url(${
                            qrIcon
                        })`
                    }}
                    >
                </div>
        </div>
        <div className="right-footer-menu-icons">
            <div
                className="footer-menu-icon"
                onClick={()=>navigate("/shop/booking")}
            >
                <img src={
                    activePath === "Booking" ? bookingActive : bookingIcon
                } alt="Booking" />
            </div>
            <div
                className="footer-menu-icon"
                onClick={()=>navigate("/shop/service-history")}
                >
                <img src={
                    activePath === "History" ? historyActive : historyIcon
                } alt="History" />
            </div>
        </div>
    </div>
  )
}

export default Footer