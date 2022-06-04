import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";

const HomeLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-container-content">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
