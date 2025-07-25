import { useNavigate } from "react-router-dom";

export default function NotesTrackerHeader({ theme }) {
    const navigate = useNavigate();

    return (
        // Titre + bouton Accueil dans la même ligne
        <div div className="flex justify-between items-center mb-6">
            <h1
                className={`text-3xl font-extrabold ${theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
            >
                Suivi des Notes
            </h1>
            <button
                onClick={() => navigate("/home")}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
            >
                Accueil
            </button>
        </div>
    )
}
