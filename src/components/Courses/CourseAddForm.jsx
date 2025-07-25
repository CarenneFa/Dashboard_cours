import { PlusIcon } from "lucide-react";

export default function CourseAddForm({ setName, theme, teacher, setTeacher, content, setContent, importantDates, setImportantDates, handleAddCourse }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <input
                type="text"
                placeholder="Nom du cours"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`border rounded-xl px-4 py-2 focus:outline-blue-400 ${theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : "border-gray-300"}`} />
            <input
                type="text"
                placeholder="Nom de l'enseignant"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                className={`border rounded-xl px-4 py-2 focus:outline-blue-400 ${theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : "border-gray-300"}`} />
            <textarea
                placeholder="Contenu du cours"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={3}
                className={`col-span-1 md:col-span-2 border rounded-xl px-4 py-2 resize-none focus:outline-blue-400 ${theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : "border-gray-300"}`} />
            <input
                type="text"
                placeholder="Dates importantes (séparées par des virgules)"
                value={importantDates}
                onChange={(e) => setImportantDates(e.target.value)}
                className={`col-span-1 md:col-span-2 border rounded-xl px-4 py-2 focus:outline-blue-400 ${theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : "border-gray-300"}`} />
            <button
                onClick={handleAddCourse}
                className="col-span-1 md:col-span-2 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300"
            >
                <PlusIcon size={18} />
                Ajouter le cours
            </button>
        </div>
    );
}