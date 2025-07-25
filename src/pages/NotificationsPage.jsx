import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useNotifications } from "../hooks/useNotifications";
import { NoNotificationFound, NotificationsList, NotificationHeader } from '../components/Notifications';

const NotificationsPage = () => {
  const { theme } = useContext(ThemeContext);
  const { notifications, markAsRead, deleteNotification } = useNotifications();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6
        ${theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 via-white to-blue-100 text-black"
        }
      `}
    >
      <div
        className={`shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-2xl ${theme === "dark" ? "bg-gray-800" : "bg-white"} `}
      >
        <NotificationHeader />

        {notifications.length === 0 ? (
          <NoNotificationFound theme={theme} />
        ) : (
          <NotificationsList theme={theme} markAsRead={markAsRead} notifications={notifications} deleteNotification={deleteNotification} />
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
