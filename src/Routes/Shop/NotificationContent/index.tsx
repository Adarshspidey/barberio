import React from "react";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect } from "react";

interface PropsType {
  setIconPath: Dispatch<SetStateAction<string>>;
}

const NotificationContent = ({ setIconPath }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIconPath("none");
  });

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      Notification Title
      <div className="notification-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc
        accumsan, tempus in. Arcu erat et a mattis tristique augue lorem lacinia
        vitae. Enim adipiscing enim, ut ac odio in.
      </div>
    </div>
  );
};

export default NotificationContent;
