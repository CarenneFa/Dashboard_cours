import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useHome } from "../hooks/useHome";
import { HomeButtons, HomeHero } from "../components/Home";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const { userName, photo, currentTime } = useHome();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${theme === "dark"
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
        : "bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-800"
        }`}
    >
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-5 w-full max-w-4xl">
        {/* Section centrée photo + bienvenue */}
        <HomeHero userName={userName} photo={photo} currentTime={currentTime} />

        {/* Boutons */}
        <HomeButtons />
      </div>
    </div>
  );
};

export default HomePage;
