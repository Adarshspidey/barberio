import React from "react";
import { useNavigate } from "react-router-dom";

const AddServiceForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      Add Service
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div>
        Name of Service <input type="text" />
      </div>
      <div>
        Description <input type="text" />
      </div>
      <div>
        Time for a session <input type="text" />
      </div>
      <div>
        Rate <input type="text" />
      </div>
      <button
        onClick={() => {
          navigate("/shop/service");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default AddServiceForm;
