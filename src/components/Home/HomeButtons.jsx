import { useNavigate } from "react-router-dom";
import { FaBook, FaChartLine, FaBell, FaCog } from "react-icons/fa";


export default function HomeButtons() {
    const navigate = useNavigate();

    return (
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
    );
};
