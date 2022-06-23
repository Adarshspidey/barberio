import { useNavigate } from "react-router-dom";
import BackButton from "../../../../Components/Buttons/BackButton";
import SmallButton from "../../../../Components/Buttons/SmallButton";
import shopIcon from "../../../../assets/Icons/shop.svg";
import phoneIcon from "../../../../assets/Icons/phone.svg";
import registerIcon from "../../../../assets/Icons/register.svg";
import profileIcon from "../../../../assets/Icons/profileicon.svg";
import InputField from "../../../../Components/Input";
import editIcon from '../../../../assets/Icons/editIcon.svg'
import location from '../../../../assets/Icons/location.svg'
import address from '../../../../assets/Icons/address.svg'
import email from '../../../../assets/Icons/email.svg'
import plus from '../../../../assets/Icons/plus.svg';
import chair from "../../../../assets/Icons/chair-light.svg";
import unisexual from "../../../../assets/Icons/unisexual.svg";
import arrow from "../../../../assets/Icons/arrow-down.svg";

const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="waper-main-container">
      <div className="wrapper-flex-justify-content">
        <div className="edit-profile-title"> Edit Profile</div>
        <BackButton/>
      </div>
      <div className="form-container-block">
          <InputField
            label="Images"
            onChange={() => {}}
          />
            <InputField
              label="Shop Name"
              icon={shopIcon}
              arrow={editIcon}
              onChange={() => {}}
            />

            <InputField
              label="Register Number"
              icon={registerIcon}
              arrow={editIcon}
              onChange={() => {}}
            />
            <InputField
              label="Location"
              icon={location}
              arrow={editIcon}
              onChange={() => {}}
            />

            <InputField
              label="Address"
              type="textarea"
              icon={address}
              arrow={editIcon}
              onChange={() => {}}
            />

            <InputField
              label="Email"
              icon={email}
              arrow={editIcon}
              onChange={() => {}}
            />

            <InputField
              label="Owner Name"
              icon={profileIcon}
              arrow={editIcon}
              onChange={() => {}}
            />

            <InputField
              label="Phone Number"
              icon={phoneIcon}
              arrow={editIcon}
              onChange={() => {}}
              />
          <InputField
            icon={chair}
            label="Number Of Seats"
            onChange={() => {}}
            value=""
            arrow={plus}
          />
          <InputField
            label="Unisexual"
            onChange={() => {}}
            value=""
            icon={unisexual}
            arrow={arrow}
          />

        <div className="button-end">
          <SmallButton
            type="saveBlack"
            label="Save"
            onClick={() => {
              navigate("/shop/profile");
              }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
