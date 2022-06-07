import React from 'react'
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <div>EditProfile
      <button>back</button>
      <div>Images</div>
      <div>John Doe Salon & Spa</div>
      <div>428456</div>
      <div>Thiruvananthapuram</div>
      <div>Address</div>
      <div>9548695158</div>
      <div>Add Your Email Here</div>
      <button
      onClick={() => {
        navigate("/shop/view-profile");
      }}>Save</button>
    </div>
  )
}

export default EditProfile