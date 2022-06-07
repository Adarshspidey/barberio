import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Offers = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate("/shop/add-offers");
        }}
      >
        Add+
      </button>
      <div>Hair Cutting</div>
      <Outlet />
    </div>
  );
};

export default Offers;
