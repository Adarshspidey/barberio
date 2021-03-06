import { useNavigate } from "react-router-dom";
import profileIcon from "../../../assets/Icons/user-profile.svg";
import arrow from "../../../assets/Icons/arrow-right.svg";
import offer from "../../../assets/Icons/offer.svg";
import shop from "../../../assets/Icons/shop-regular.svg";
import scheduletime from "../../../assets/Icons/scheduletime.svg";
import timer from "../../../assets/Icons/timer.svg";
import review from "../../../assets/Icons/star-review.svg";
import shopImage from "../../../assets/Images/Cover_image.png";
import gallery from "../../../assets/Icons/gallery.svg";
import logout from "../../../assets/Icons/logout.svg";
import ProfileMenuCard from "../../../Components/ProfileMenuCard";
import BackButton from "../../../Components/Buttons/BackButton";
import shoplogo from "../../../assets/Images/shopImage.png";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ShopLayOutProps } from "../../../Types/Props";

interface PropsTypes {
  setShopLayOutProps: Dispatch<SetStateAction<ShopLayOutProps>>;
}

const ViewProfile = ({ setShopLayOutProps }: PropsTypes) => {
  useEffect(() => {
    setShopLayOutProps((prev) => ({
      ...prev,
      hideBackButton: true,
    }));

    //ReSet Props For The LayOut
    return () => {
      setShopLayOutProps((prev) => ({
        ...prev,
        hideBackButton: false,
      }));
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="waper-main-container">
      <div className="desktop-view">
        <div className="image-gallery">
          <img src={shopImage} alt="gallery" />
          <div className="logo-gallery">
            <img src={shoplogo} alt="Shop" />
          </div>
        </div>
        <div className=" button-end waper">
          <BackButton
          onClick={() => {
            navigate("/shop/profile/gallery");
          }}
           label="Gallery" icon={gallery} />
        </div>

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
          <div className="profile-menu-card"
          onClick={() => {
            navigate("/");
          }}>
            <div className="profile-card-items">
              <div>
                <img src={logout} alt="icon" />
              </div>
              <div className="logout-button">LogOut</div>
            </div>
          </div>
        </div>
      </div>
     

      {/* dektopview */}
      <div className="desktop-waper-component">
        <div className="peofile-waper-component">
          <div className="image-gallery">
            <img src={shopImage} alt="gallery" />
            <div className="logo-gallery">
              <img src={shoplogo} alt="Shop" />
            </div>
          </div>
          <div className=" button-end waper">
            <BackButton 
            onClick={() => {
              navigate("/shop/profile/gallery");
            }}
              label="Gallery" 
              icon={gallery} />
              
          </div>
          <div className="profile-menu-title">John Doe Salon & Spa</div>
          <ProfileMenuCard
            title="Edit Profile"
            icon={profileIcon}
            arrow={arrow}
            onClick={() => {
              navigate("/shop/profile/edit");
            }}
          />
          <div className="logout-container">
            <div className="profile-menu-card">
              <div className="profile-card-items"
              onClick={() => {
                navigate("/");
              }}>
                <div>
                  <img src={logout} alt="icon" />
                </div>
                <div className="logout-button"
                
                >LogOut</div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-waper-component border-left">
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
        </div>
       
      </div>
    </div>
  );
};

export default ViewProfile;
