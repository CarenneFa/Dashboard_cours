export default function SettingsFooter({ theme, toggleTheme }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Thème
            </h2>
            <p className="mb-4 text-center">
                Thème actuel :{" "}
                <span className="font-semibold">{theme === "light" ? "Clair" : "Sombre"}</span>
            </p>
            <button
                onClick={toggleTheme}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
                Passer en mode {theme === "light" ? "Sombre" : "Clair"}
            </button>
        </div>
    );
}