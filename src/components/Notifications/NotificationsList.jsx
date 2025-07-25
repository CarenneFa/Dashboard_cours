import NotificationListItem from "./NotificationListItem";

export default function NotificationsList({ theme, markAsRead, notifications, deleteNotification }) {
    return (
        <ul
            className={`divide-y ${theme === "dark" ? "divide-gray-700" : "divide-gray-200"
                }`}
        >
            {notifications.map((notif, idx) => (
                <NotificationListItem key={idx} notif={notif} deleteNotification={deleteNotification} markAsRead={markAsRead} theme={theme} />
            ))}
        </ul>
    );
};