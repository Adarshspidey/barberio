import { useNavigate } from "react-router-dom";
import ProfileMenu from "../../../Components/ProfileMenu";
import profileIcon from '../../../assets/Icons/user-profile.svg'
import arrow from '../../../assets/Icons/arrow-right.svg'
import offer from '../../../assets/Icons/offer.svg'
import shop from '../../../assets/Icons/shop-regular.svg'
import scheduletime from '../../../assets/Icons/scheduletime.svg'
import timer from '../../../assets/Icons/timer.svg'
import review from '../../../assets/Icons/star-review.svg'
import shopImage from '../../../assets/Images/Cover_image.png'
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import gallery from '../../../assets/Icons/gallery.svg'
import logout from '../../../assets/Icons/logout.svg'

const ViewProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div><img src={shopImage} alt="gallery"/></div>
        <div className=" button-end">
        <ButtonWithIcon
        type="white"
        label="Gallery"
        leftIcon={gallery}
        />
        </div>
      </div>
      <div className="profile-menu-title">John Doe Salon & Spa</div>
      <ProfileMenu
      title="Edit Profile"
      icon={profileIcon}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/edit");
      }}
      />

    <ProfileMenu
      title="Offers"
      icon={offer}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/offers");
      }}
      />

    <ProfileMenu
      title=" Shops Near Me"
      icon={shop}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/shop-near-me");
      }}
      />

    <ProfileMenu
      title="Schedule Worktime"
      icon={timer}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/schedule-work");
      }}
      />

    <ProfileMenu
      title=" Service Time Interval"
      icon={scheduletime}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/schedule-interval");
      }}
      />

    <ProfileMenu
      title=" Ratings & Reviews"
      icon={review}
      arrow={arrow}
      onClick={() => {
        navigate("/shop/profile/ratings");
      }}
      />
      <div className="profile-menu-card">
      <div className="profile-card-items">
            <div ><img src={logout} alt="icon"  /></div>
            <div className="logout-button">LogOut</div>
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
