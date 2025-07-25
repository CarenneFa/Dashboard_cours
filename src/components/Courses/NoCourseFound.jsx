export default function NoCourseFound({ theme, navigate }) {
    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center ${theme === "dark"
                ? "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white"
                : "bg-gradient-to-br from-blue-200 via-blue-100 to-white text-black"
                }`}
        >
            <div
                className={`shadow-lg rounded-lg px-8 pt-6 pb-8 w-full max-w-2xl ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
                    }`}
            >
                <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
                    Cours introuvable
                </h1>
                <button
                    onClick={() => navigate("/courses")}
                    className="mt-4 font-bold py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700 text-white min-w-[120px] text-center mx-auto block"
                >
                    Retour aux cours
                </button>
                <button
                    onClick={() => navigate("/home")}
                    className="mt-4 font-bold py-2 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-700 text-white min-w-[120px] text-center mx-auto block"
                >
                    Accueil
                </button>
            </div>
        </div>
    )
}
