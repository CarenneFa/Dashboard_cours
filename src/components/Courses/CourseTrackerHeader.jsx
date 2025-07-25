export default function CourseTrackerHeader({ navigate }) {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-blue-600">Suivi des Cours</h1>
            <button
                onClick={() => navigate("/home")}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
            >
                Accueil
            </button>
        </div>
    );
}
