export default function CourseEditForm({ handleSave, course, formData, handleChange, theme, setIsEditing }) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSave();
            }}
        >
            <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
                Modifier le cours : {course.name}
            </h1>
            <div className="mb-4">
                <label className="block mb-1 font-semibold" htmlFor="name">
                    Nom du cours
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 ${theme === "dark"
                        ? "bg-gray-700 text-white border-gray-600"
                        : "border-gray-300"}`}
                    required />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-semibold" htmlFor="teacher">
                    Enseignant
                </label>
                <input
                    id="teacher"
                    name="teacher"
                    type="text"
                    value={formData.teacher}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 ${theme === "dark"
                        ? "bg-gray-700 text-white border-gray-600"
                        : "border-gray-300"}`} />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-semibold" htmlFor="content">
                    Contenu
                </label>
                <textarea
                    id="content"
                    name="content"
                    rows="4"
                    value={formData.content}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 ${theme === "dark"
                        ? "bg-gray-700 text-white border-gray-600"
                        : "border-gray-300"}`} />
            </div>
            <div className="mb-4">
                <label
                    className="block mb-1 font-semibold"
                    htmlFor="importantDates"
                >
                    Dates importantes (séparées par des virgules)
                </label>
                <input
                    id="importantDates"
                    name="importantDates"
                    type="text"
                    value={formData.importantDates}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 ${theme === "dark"
                        ? "bg-gray-700 text-white border-gray-600"
                        : "border-gray-300"}`} />
            </div>
            <div className="mt-6 flex justify-center space-x-4">
                <button
                    type="submit"
                    className="font-bold py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 text-white"
                >
                    Enregistrer
                </button>
                <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="font-bold py-2 px-4 rounded-lg bg-gray-400 hover:bg-gray-500 text-white"
                >
                    Annuler
                </button>
            </div>
        </form>
    );
}

