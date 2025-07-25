import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon, Trash2 } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

const CourseTracker = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [content, setContent] = useState("");
  const [importantDates, setImportantDates] = useState("");

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    if (savedCourses.length > 0) {
      setCourses(savedCourses);
    } else {
      const defaultCourses = [
        {
          id: 1,
          name: "Mathématiques",
          teacher: "M. Dupont",
          content: "Introduction aux mathématiques, Algèbre, Géométrie.",
          importantDates: ["Examen : 20 juin", "Devoir : 25 juin"],
        },
        {
          id: 2,
          name: "Informatique",
          teacher: "Mme Durand",
          content: "Introduction à la programmation, JavaScript, React.",
          importantDates: ["Examen : 22 juin", "Projet : 28 juin"],
        },
      ];
      setCourses(defaultCourses);
      localStorage.setItem("courses", JSON.stringify(defaultCourses));
    }
  }, []);

  const handleAddCourse = () => {
    if (
      !name.trim() ||
      !teacher.trim() ||
      !content.trim() ||
      !importantDates.trim()
    ) {
      alert(
        "Veuillez remplir tous les champs : nom du cours, enseignant, contenu et dates importantes."
      );
      return;
    }

    const datesArray = importantDates
      .split(",")
      .map((date) => date.trim())
      .filter((date) => date.length > 0);

    const newCourse = {
      id: Date.now(),
      name: name.trim(),
      teacher: teacher.trim(),
      content: content.trim(),
      importantDates: datesArray,
    };

    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    setName("");
    setTeacher("");
    setContent("");
    setImportantDates("");
  };

  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const goToDetail = (id) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 ${theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-100 to-white text-black"
        }`}
    >
      <div
        className={`w-full max-w-4xl shadow-xl rounded-2xl p-8 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">Suivi des Cours</h1>
          <button
            onClick={() => navigate("/home")}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
          >
            Accueil
          </button>
        </div>

        {/* Formulaire */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <input
            type="text"
            placeholder="Nom du cours"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`border rounded-xl px-4 py-2 focus:outline-blue-400 ${theme === "dark"
                ? "bg-gray-700 text-white border-gray-600"
                : "border-gray-300"
              }`}
          />
          <input
            type="text"
            placeholder="Nom de l'enseignant"
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className={`border rounded-xl px-4 py-2 focus:outline-blue-400 ${theme === "dark"
                ? "bg-gray-700 text-white border-gray-600"
                : "border-gray-300"
              }`}
          />
          <textarea
            placeholder="Contenu du cours"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            className={`col-span-1 md:col-span-2 border rounded-xl px-4 py-2 resize-none focus:outline-blue-400 ${theme === "dark"
                ? "bg-gray-700 text-white border-gray-600"
                : "border-gray-300"
              }`}
          />
          <input
            type="text"
            placeholder="Dates importantes (séparées par des virgules)"
            value={importantDates}
            onChange={(e) => setImportantDates(e.target.value)}
            className={`col-span-1 md:col-span-2 border rounded-xl px-4 py-2 focus:outline-blue-400 ${theme === "dark"
                ? "bg-gray-700 text-white border-gray-600"
                : "border-gray-300"
              }`}
          />
          <button
            onClick={handleAddCourse}
            className="col-span-1 md:col-span-2 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300"
          >
            <PlusIcon size={18} />
            Ajouter le cours
          </button>
        </div>

        {/* Liste des cours */}
        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`flex justify-between items-start p-4 rounded-xl shadow-sm ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-50"
                }`}
            >
              <div onClick={() => goToDetail(course.id)} className="cursor-pointer">
                <p className="text-lg font-semibold text-blue-600 hover:underline">
                  {course.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {course.teacher}
                </p>
                <p className="text-sm mt-1">{course.content}</p>
                {course.importantDates?.length > 0 && (
                  <ul className="list-disc ml-5 mt-2 text-sm text-gray-500 dark:text-gray-300">
                    {course.importantDates.map((date, idx) => (
                      <li key={idx}>{date}</li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                onClick={() => handleDeleteCourse(course.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseTracker;
