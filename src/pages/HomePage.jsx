import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useHome } from "../hooks/useHome";
import { HomeButtons, HomeHero } from "../components/Home";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} shadow-lg rounded-2xl p-5 w-full max-w-4xl`}
      >
        {/* Section centrée photo + bienvenue */}
        <HomeHero userName={userName} photo={photo} currentTime={currentTime} />

        {/* Boutons */}
        <HomeButtons />
      </motion.div>
    </div>
  );
};

export default HomePage;
