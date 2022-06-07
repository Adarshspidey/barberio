import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom'

const Offers = () => {
    const navigate = useNavigate();
  return (
    <div>
        <button
          onClick={() => {
            navigate("/shop/view-profile");
          }}>Back</button>
        <button>Add+</button>
        <div>Hair Cutting</div>
        <Outlet/>
    
    </div>
  )
}

export default Offers