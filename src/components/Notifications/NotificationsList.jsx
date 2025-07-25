import NotificationListItem from "./NotificationListItem";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function NotificationsList({ theme, markAsRead, notifications, deleteNotification }) {
    return (
        <ul
            className={`divide-y ${theme === "dark" ? "divide-gray-700" : "divide-gray-200"
                }`}
        >
            {notifications.map((notif, idx) => (
                <motion.div initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.1 * idx, ease: "easeInOut" }}
                    key={idx}
                >
                    <NotificationListItem notif={notif} deleteNotification={deleteNotification} markAsRead={markAsRead} theme={theme} />
                </motion.div>
            ))}
        </ul>
    );
};