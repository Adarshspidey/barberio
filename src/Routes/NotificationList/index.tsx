import React from "react";
import { useNavigate } from "react-router-dom";

const NotificationList = () => {
  const navigate = useNavigate();
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
