import profileIcon from "../../assets/Icons/Profile.svg";
import qrIcon from "../../assets/Icons/qr-scan-icon.svg";
import bookingIcon from "../../assets/Icons/booking.svg";
import historyIcon from "../../assets/Icons/history.svg";
import shareIcon from "../../assets/Icons/shareIcon.svg";
import servicesIcon from "../../assets/Icons/Services.svg";
import { useNavigate } from "react-router-dom";

const Sidepain = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-left-container">
        <div className="footer-left-content"
        onClick={()=>navigate("/shop/profile")}>
            <div><img src={profileIcon} alt="profile"/></div>
            <div>Profile</div>
        </div>
        <div className="footer-left-content"
        onClick={()=>navigate("/shop/service")}
        >
          <div><img src={servicesIcon} alt="Serive"/></div>
        
        <div>Services</div>
        </div>
        <div className="footer-left-content"
        onClick={()=>navigate("/shop/booking")}>
        <div><img src={bookingIcon} alt="booking"/></div>
        <div>Bookings</div>
        </div>
        <div className="footer-left-content"
        onClick={()=>navigate("/shop/service-history")}>
        <div><img src={historyIcon} alt="History"/></div>
        <div>History</div>
        </div>
        <div className="footer-left-content"
        onClick={()=>navigate("/shop/QrShare")}>
        <div><img src={shareIcon} alt="shareIcon"/></div>
        <div>Share </div>
        </div>
        {/* <div className="footer-left-content qr-content">
        <div><img src={qrIcon} alt="qrIcon"/></div>
        <div>QR</div>
        </div> */}
    </div>
  )
}

export default Sidepain