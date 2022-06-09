import React from "react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileActive from "../../../assets/Icons/Profile-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const EditProfile = ({ setActiveIcon, setIconPath }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIcon(profileActive);
    setIconPath("profile");
  });

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
      Add Offer Offer <input type="text" />
      Description <input type="text" />
      Start
      <div className="start">
        Date <input type="text" />
        Time <input type="text" />
      </div>
      End
      <div className="end">
        Date <input type="text" />
        Time <input type="text" />
      </div>
      <button
        onClick={() => {
          navigate("/shop/offers");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default EditProfile;
