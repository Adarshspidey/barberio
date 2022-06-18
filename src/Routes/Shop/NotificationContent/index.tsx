
import { useNavigate } from "react-router-dom";

const NotificationContent = () => {
  const navigate = useNavigate();

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
