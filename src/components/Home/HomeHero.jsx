import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function HomeHero({ photo, userName, currentTime }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/");
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center h-72 text-center mb-8">
            <div className="flex justify-end w-full mb-6">
                <button className="flex flex-row gap-4 justify-center items-center bg-red-100 font-medium dark:bg-red-600 hover:bg-red-200 dark:hover:bg-red-500 text-red-800 dark:text-white p-4 rounded-xl shadow-md transition cursor-pointer" onClick={handleLogout}>
                    Se déconnecter
                    <LogOut className="text-2xl" />
                </button>
            </div>
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
        </motion.div>
    )
}
