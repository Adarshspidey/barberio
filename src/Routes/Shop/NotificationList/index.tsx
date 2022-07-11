import { useNavigate } from "react-router-dom";
import NotificationCard from "../../../Components/NotificationCard";

const NotificationList = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NotificationCard
        title="Notification 1"
        time="10:45 AM"
        onClick={() => {
          navigate("/shop/notification-body");
        }}
      />
      <NotificationCard
        title="Notification 2"
        time="11:15 PM"
        onClick={() => {
          navigate("/shop/notification-body");
        }}
      />
      <NotificationCard
        title="Notification 3"
        time="12:00 AM"
        onClick={() => {
          navigate("/shop/notification-body");
        }}
      />
    </div>
  );
};

export default NotificationList;
