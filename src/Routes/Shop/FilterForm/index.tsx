import React from 'react'
import { useNavigate } from "react-router-dom";
const FilterForm = () => {
    const navigate = useNavigate();
  return (
    <div>
       <button
       onClick={() => {
        navigate("/shop/service-history");
      }}
       >Back</button>
      <input type="text" />
      Name of service
      <input type="text" />
      Refund Status
      <input type="text" />
      <div>From</div>
      Date
      <input type="text" />
      <div>To</div>
      Date
      <input type="text" />
      <button
      onClick={() => {
        navigate("/shop/view-profile ");
      }}
      >Apply</button>
    </div>
  )
}

export default FilterForm