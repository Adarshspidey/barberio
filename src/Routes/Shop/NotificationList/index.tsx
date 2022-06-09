import React from "react";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect } from "react";

interface PropsType {
  setIconPath: Dispatch<SetStateAction<string>>;
}

const NotificationList = ({ setIconPath }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    setIconPath("none");
  });

  return (
    <div>
      <div
        onClick={() => {
          navigate("/shop/notification-body");
        }}
      >
        Notification 1
      </div>
      <div
        onClick={() => {
          navigate("/shop/notification-body");
        }}
      >
        Notification 2
      </div>
      <div
        onClick={() => {
          navigate("/shop/notification-body");
        }}
      >
        Notification 3
      </div>
    </div>
  );
};

export default NotificationList;
