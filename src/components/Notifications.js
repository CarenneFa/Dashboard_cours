import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";  // ajout navigation
import { ThemeContext } from "../context/ThemeContext";

const Notifications = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // Prendre les notifications depuis le localStorage ou fallback par défaut
  const [notifications, setNotifications] = useState(
    JSON.parse(localStorage.getItem("notifications")) || [
      { id: 1, message: "Examen de Mathématiques le 25 juin", read: false },
      { id: 2, message: "Devoir en Informatique à rendre demain", read: false },
      { id: 3, message: "Cours d'Anglais reporté", read: true },
    ]
  );

  // Sauvegarder les changements dans le localStorage
  const saveToLocalStorage = (newNotifs) => {
    localStorage.setItem("notifications", JSON.stringify(newNotifs));
  };

  const markAsRead = (id) => {
    const newNotifs = notifications.map((notif) =>
      notif.id === id ? { ...notif, read: true } : notif
    );
    setNotifications(newNotifs);
    saveToLocalStorage(newNotifs);
  };

  const deleteNotification = (id) => {
    const newNotifs = notifications.filter((notif) => notif.id !== id);
    setNotifications(newNotifs);
    saveToLocalStorage(newNotifs);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
            : "bg-gradient-to-br from-blue-100 via-white to-blue-100 text-black"
        }
      `}
    >
      <div
        className={`shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-2xl
          ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }
        `}
      >
        {/* Ligne titre + bouton Accueil */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">Notifications</h1>
          <button
            onClick={() => navigate("/home")}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
          >
            Accueil
          </button>
        </div>

        {notifications.length === 0 ? (
          <p
            className={`${
              theme === "dark" ? "text-gray-300" : "text-gray-500"
            } text-center text-lg`}
          >
            Aucune notification pour le moment.
          </p>
        ) : (
          <ul
            className={`divide-y ${
              theme === "dark" ? "divide-gray-700" : "divide-gray-200"
            }`}
          >
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className={`p-4 mb-3 rounded-lg
                  ${
                    notif.read
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
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notifications;
