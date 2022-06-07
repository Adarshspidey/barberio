import { Outlet } from "react-router-dom";
import "./style.css";
import profileIcon from '../../../assets/Icons/Profile.svg'
import scanIcon from '../../../assets/Icons/scan.svg'
import bookingIcon from '../../../assets/Icons/booking.svg'
import historyIcon from '../../../assets/Icons/history.svg'
import servicesIcon from '../../../assets/Icons/Services.svg'
import searchIcon from '../../../assets/Icons/search.svg'
import notificationIcon from '../../../assets/Icons/notifications.svg'
const ShopLayout = () => {
  return (
    <div className="shoplayout-component">
      <header>
        <div className="shop-header">
          <div className="header-titile" >Barberio</div>
          <div className="header-images">
            <img src={searchIcon} alt="search"/>
            <img src={notificationIcon} alt="notification"/>
          </div>
        </div>
      </header>
      <Outlet/>
      <footer>
        <div className="footer-component">
          <img src={profileIcon} alt='profile'/>
          <img src={servicesIcon} alt='services'/>
          
          <div className="scan-Icon">
          <img src={scanIcon} alt='scan'/>
          </div>
          <img src={bookingIcon} alt='booking'/>
          <img src={historyIcon} alt='history'/>
          <div></div>
        </div>
      </footer>
    </div>
  )
}

export default ShopLayout