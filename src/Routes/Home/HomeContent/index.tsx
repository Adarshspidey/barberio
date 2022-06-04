import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import barberimage from "../../../assets/Icons/barber.svg";
import "./style.css";

interface PropsTypes {
  setHeaderImage: Dispatch<SetStateAction<string>>;
}

const HomeContent = ({ setHeaderImage }: PropsTypes) => {
  useEffect(() => {
    setHeaderImage(barberimage);
  });
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-content-title">Barberio</div>
        <div className="home-content-discription">
          <div className="content-title">Hello and welcome to Barberio!</div>
          <div className="content-discription">
            Our barbers will pamper you with a haircut and shave of your choice.
            Have a seat and we'll be right with you!
          </div>
        </div>
        <div className="button-component">
          <button
            className="login-button"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            className="register-button"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
