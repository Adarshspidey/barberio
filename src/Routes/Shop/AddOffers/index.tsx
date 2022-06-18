import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

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
          navigate("/shop/profile/offers");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default EditProfile;
