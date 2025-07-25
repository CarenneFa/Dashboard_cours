import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { FaBook, FaChartLine, FaBell, FaCog } from "react-icons/fa";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [photo, setPhoto] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUserName(currentUser.firstName || "Utilisateur");
      setPhoto(currentUser.profilePicture || "");
    }

    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
          : "bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800"
      }`}
    >
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-5 w-full max-w-4xl">
        {/* Section centrée photo + bienvenue */}
        <div className="flex flex-col items-center justify-center h-72 text-center mb-8">
          {photo ? (
            <img
              src={photo}
              alt="Profil"
              className="w-28 h-28 rounded-full object-cover mb-4 shadow-md"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 mb-4">
              Pas de photo
            </div>
          )}
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-300">
            Bienvenue, {userName} ! 
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Il est actuellement <strong>{currentTime}</strong>.
          </p>
        </div>

        {/* Boutons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <button
            className="flex flex-col items-center bg-blue-100 dark:bg-blue-600 hover:bg-blue-200 dark:hover:bg-blue-500 text-blue-800 dark:text-white p-4 rounded-xl shadow-md transition"
            onClick={() => navigate("/courses")}
          >
            <FaBook className="text-2xl mb-2" />
            <span className="font-semibold text-sm text-center">Cours</span>
          </button>
          <button
            className="flex flex-col items-center bg-green-100 dark:bg-green-600 hover:bg-green-200 dark:hover:bg-green-500 text-green-800 dark:text-white p-4 rounded-xl shadow-md transition"
            onClick={() => navigate("/grades")}
          >
            <FaChartLine className="text-2xl mb-2" />
            <span className="font-semibold text-sm text-center">Notes</span>
          </button>
          <button
            className="flex flex-col items-center bg-yellow-100 dark:bg-yellow-600 hover:bg-yellow-200 dark:hover:bg-yellow-500 text-yellow-800 dark:text-white p-4 rounded-xl shadow-md transition"
            onClick={() => navigate("/notifications")}
          >
            <FaBell className="text-2xl mb-2" />
            <span className="font-semibold text-sm text-center">Notifications</span>
          </button>
          <button
            className="flex flex-col items-center bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 text-gray-800 dark:text-white p-4 rounded-xl shadow-md transition"
            onClick={() => navigate("/settings")}
          >
            <FaCog className="text-2xl mb-2" />
            <span className="font-semibold text-sm text-center">Paramètres</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
