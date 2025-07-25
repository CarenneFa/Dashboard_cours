import { useNavigate } from "react-router-dom";

export default function SettingsHeader() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center mb-8">
            <h1 className={`text-3xl font-semibold text-blue-600 dark:text-blue-400 text-center`}>
                Paramètres du profil
            </h1>
            <button
                onClick={() => navigate("/home")}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
            >
                Accueil
            </button>
        </div>
    );
};