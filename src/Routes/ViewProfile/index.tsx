import { useNavigate } from "react-router-dom";
const ViewProfile = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div 
            onClick={() => {
                navigate("/shop/edit");
              }}
        >Edit Profile </div>
        <div
          onClick={() => {
            navigate("/shop/offers");
          }}>Offers</div>
        <div
         >Shops Near Me</div>
        <div onClick={() => {
            navigate("/shop/schedule-time");
          }}>Schedule Worktime</div>
        <div>Service Time Interval</div>
        <div>Ratings & Reviews</div>
        <button onClick={() => {
                navigate("/");
              }}>Logout</button>
    </div>
  )
}

export default ViewProfile