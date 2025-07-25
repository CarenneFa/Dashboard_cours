import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const [course, setCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    teacher: "",
    content: "",
    importantDates: "",
  });

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const foundCourse = savedCourses.find((c) => String(c.id) === id);

    if (!foundCourse) {
      setCourse(null);
      return;
    }

    setCourse(foundCourse);
    setFormData({
      name: foundCourse.name,
      teacher: foundCourse.teacher || "",
      content: foundCourse.content || "",
      importantDates: foundCourse.importantDates
        ? foundCourse.importantDates.join(", ")
        : "",
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const updatedCourses = savedCourses.map((c) =>
      String(c.id) === id
        ? {
            ...c,
            name: formData.name.trim(),
            teacher: formData.teacher.trim(),
            content: formData.content.trim(),
            importantDates: formData.importantDates
              .split(",")
              .map((d) => d.trim())
              .filter((d) => d.length > 0),
          }
        : c
    );
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    setCourse(updatedCourses.find((c) => String(c.id) === id));
    setIsEditing(false);
  };

  if (!course) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white"
            : "bg-gradient-to-br from-blue-200 via-blue-100 to-white text-black"
        }`}
      >
        <div
          className={`shadow-lg rounded-lg px-8 pt-6 pb-8 w-full max-w-2xl ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
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
    );
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 text-white"
          : "bg-gradient-to-br from-blue-200 via-blue-100 to-white text-black"
      }`}
    >
      <div
        className={`shadow-lg rounded-lg px-8 pt-6 pb-8 w-full max-w-2xl ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        {!isEditing ? (
          <>
            <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
              Détails du cours : {course.name}
            </h1>
            <p className="mb-2">
              <strong>Enseignant :</strong> {course.teacher || "Non renseigné"}
            </p>
            <p className="mb-2">
              <strong>Contenu :</strong> {course.content || "Non renseigné"}
            </p>
            <p>
              <strong>Dates importantes :</strong>
            </p>
            <ul className="list-disc pl-5 mb-4">
              {course.importantDates && course.importantDates.length > 0 ? (
                course.importantDates.map((date, index) => (
                  <li key={index}>{date}</li>
                ))
              ) : (
                <li>Aucune date importante</li>
              )}
            </ul>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => navigate("/courses")}
                className="font-bold py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700 text-white"
              >
                Retour aux cours
              </button>
              <button
                onClick={() => navigate("/home")}
                className="font-bold py-2 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-700 text-white"
              >
                Accueil
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="font-bold py-2 px-4 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white"
              >
                Modifier
              </button>
            </div>
          </>
        ) : (
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
                className={`w-full border rounded px-3 py-2 ${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : "border-gray-300"
                }`}
                required
              />
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
                className={`w-full border rounded px-3 py-2 ${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : "border-gray-300"
                }`}
              />
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
                className={`w-full border rounded px-3 py-2 ${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : "border-gray-300"
                }`}
              />
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
                className={`w-full border rounded px-3 py-2 ${
                  theme === "dark"
                    ? "bg-gray-700 text-white border-gray-600"
                    : "border-gray-300"
                }`}
              />
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
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
