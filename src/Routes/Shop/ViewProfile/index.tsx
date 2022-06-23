import { useNavigate } from "react-router-dom";
import profileIcon from '../../../assets/Icons/user-profile.svg'
import arrow from '../../../assets/Icons/arrow-right.svg'
import offer from '../../../assets/Icons/offer.svg'
import shop from '../../../assets/Icons/shop-regular.svg'
import scheduletime from '../../../assets/Icons/scheduletime.svg'
import timer from '../../../assets/Icons/timer.svg'
import review from '../../../assets/Icons/star-review.svg'
import shopImage from '../../../assets/Images/Cover_image.png'
import gallery from '../../../assets/Icons/gallery.svg'
import logout from '../../../assets/Icons/logout.svg'
import ProfileMenuCard from "../../../Components/ProfileMenuCard";
import BackButton from "../../../Components/Buttons/BackButton";
import shoplogo from '../../../assets/Images/shopImage.png'
const ViewProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="waper-main-container">
      <div>
        <div className="image-gallery">
          <img src={shopImage} alt="gallery"/>
          <div className="logo-gallery"><img src={shoplogo} alt="Shop"/></div> 
        </div>
        <div className=" button-end waper">
        <BackButton
        label="Gallery"
        icon={gallery}
        />
        </div>
      </div >
      <div className="profile-menu-title">John Doe Salon & Spa</div>
      <ProfileMenuCard
      title="Edit Profile"
      icon={profileIcon}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/edit");
      }}
      />

    <ProfileMenuCard
      title="Offers"
      icon={offer}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/offers");
      }}
      />

    <ProfileMenuCard
      title=" Shops Near Me"
      icon={shop}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/shop-near-me");
      }}
      />

    <ProfileMenuCard
      title="Schedule Worktime"
      icon={timer}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/schedule-work");
      }}
      />

    <ProfileMenuCard
      title=" Service Time Interval"
      icon={scheduletime}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/schedule-interval");
      }}
      />

    <ProfileMenuCard
      title=" Ratings & Reviews"
      icon={review}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/ratings");
      }}
      />
      <div className="logout-container">
      <div className="profile-menu-card">
        <div className="profile-card-items">
              <div ><img src={logout} alt="icon"  /></div>
              <div className="logout-button">LogOut</div>
        </div>
      </div>
      </div>
    {/* <ProfileMenu
      title=" Logout"
      icon={logout}
      onClick={() => {
        navigate("/");
      }}
      /> */}
    </div>
  );
};

export default ViewProfile;
