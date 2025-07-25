export default function NotificationListItem({ deleteNotification, markAsRead, notif, theme }) {
    return (
        <li
            key={notif.id}
            className={`p-4 mb-3 rounded-lg
                  ${notif.read
                    ? theme === "dark"
                        ? "bg-gray-700"
                        : "bg-gray-100"
                    : theme === "dark"
                        ? "bg-blue-900"
                        : "bg-blue-50"
                }
                `}
        >
            <p className="text-lg">{notif.message}</p>
            <div className="flex justify-center space-x-6 mt-4">
                {!notif.read && (
                    <button
                        onClick={() => markAsRead(notif.id)}
                        className="font-semibold text-green-500 hover:text-green-600 focus:outline-none"
                    >
                        Marquer comme lue
                    </button>
                )}
                <button
                    onClick={() => deleteNotification(notif.id)}
                    className="font-semibold text-red-500 hover:text-red-600 focus:outline-none"
                >
                    Supprimer
                </button>
            </div>
        </li>
    );
}