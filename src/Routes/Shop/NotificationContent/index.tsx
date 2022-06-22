import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/Buttons/BackButton";

const NotificationContent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="content-end">
        <BackButton />
      </div>

      <div className="header-wraper-space-between">
        <div className="notification-header">Notification Title</div>
        <div className="notification-time">10:45 AM </div>
      </div>

      <div className="notification-content-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate nunc
        accumsan, tempus in. Arcu erat et a mattis tristique augue lorem lacinia
        vitae. Enim adipiscing enim, ut ac odio in.
      </div>
    </div>
  );
};

export default NotificationContent;
