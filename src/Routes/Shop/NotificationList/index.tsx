import React from "react";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect } from "react";
import NotificationCard from "../../../Components/NotificationCard";

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
      <NotificationCard title="Notification 1" time="10:45 AM" />
      <NotificationCard title="Notification 2" time="11:15 PM" />
      <NotificationCard title="Notification 3" time="12:00 AM" />
    </div>
  );
};

export default NotificationList;