import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";  // pour la navigation
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ThemeContext } from "../../context/ThemeContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const NotesTracker = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [grades, setGrades] = useState({});

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    const savedGrades = JSON.parse(localStorage.getItem("grades")) || {};

    if (savedCourses.length === 0) {
      const defaultCourses = [
        { id: 1, name: "Mathématique 110" },
        { id: 2, name: "Mathématique 120" },
        { id: 3, name: "Environnement IT" },
        { id: 4, name: "Python" },
        { id: 5, name: "Java" },
        { id: 6, name: "C" },
        { id: 7, name: "C++" },
      ];
      localStorage.setItem("courses", JSON.stringify(defaultCourses));
      setCourses(defaultCourses);
    } else {
      setCourses(savedCourses);
    }
    setGrades(savedGrades);
  }, []);

  const updateGrade = (courseId, grade) => {
    const validGrade = grade === "" ? "" : Math.min(Math.max(Number(grade), 0), 20);
    const updatedGrades = { ...grades, [courseId]: validGrade };
    setGrades(updatedGrades);
    localStorage.setItem("grades", JSON.stringify(updatedGrades));
  };

  // Calculs pour la moyenne (ignorer notes vides)
  const validGrades = Object.values(grades).filter((g) => g !== "" && !isNaN(g));
  const totalGrades = validGrades.reduce((sum, grade) => sum + Number(grade), 0);
  const averageGrade =
    validGrades.length > 0 ? (totalGrades / validGrades.length).toFixed(2) : "0.00";

  // const textColor = theme === "dark" ? "#93c5fd" : "#2563EB";
  // const redColor = "rgb(220 38 38)"; // rouge Tailwind rouge-600
  const tableHeaderBg = theme === "dark" ? "bg-gray-700" : "bg-blue-100";
  const tableHeaderText = theme === "dark" ? "text-blue-300" : "text-blue-700";
  const tableRowHover = theme === "dark" ? "hover:bg-gray-600" : "hover:bg-blue-50";
  const inputBg =
    theme === "dark"
      ? "bg-gray-700 text-white border-gray-600"
      : "bg-white text-gray-700 border-gray-300";
  const inputFocusRing = theme === "dark" ? "focus:ring-blue-400" : "focus:ring-blue-500";

  const data = {
    labels: courses.map((course) => course.name),
    datasets: [
      {
        label: "Notes",
        data: courses.map((course) => grades[course.id] || 0),
        backgroundColor: courses.map((course) =>
          grades[course.id] !== undefined && grades[course.id] !== "" && grades[course.id] < 10
            ? "rgba(220, 38, 38, 0.7)" // rouge
            : theme === "dark"
              ? "rgba(147, 197, 253, 0.7)"
              : "rgba(37, 99, 235, 0.7)"
        ),
        borderColor: theme === "dark" ? "#93c5fd" : "#2563EB",
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
    >
      <div
        className={`w-full max-w-3xl shadow-lg rounded-lg px-10 pt-8 pb-10 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
      >
        {/* Titre + bouton Accueil dans la même ligne */}
        <div className="flex justify-between items-center mb-6">
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

        {/* Table des notes */}
        <table
          className={`table-auto w-full mb-6 border-collapse border rounded-md overflow-hidden border-gray-300`}
        >
          <thead className={tableHeaderBg}>
            <tr>
              <th
                className={`px-6 py-3 text-left font-semibold border-b border-gray-300 ${tableHeaderText}`}
              >
                Cours
              </th>
              <th
                className={`px-6 py-3 text-left font-semibold border-b border-gray-300 ${tableHeaderText}`}
              >
                Note / 20
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              const grade = grades[course.id];
              const isBelowAverage = grade !== undefined && grade !== "" && grade < 10;
              return (
                <tr key={course.id} className={`border-b border-gray-200 ${tableRowHover}`}>
                  <td className="px-6 py-3">{course.name}</td>
                  <td
                    className={`px-6 py-3 ${isBelowAverage ? "text-red-600 font-semibold" : ""
                      }`}
                  >
                    <input
                      type="number"
                      value={grade || ""}
                      onChange={(e) => updateGrade(course.id, e.target.value)}
                      className={`shadow-sm appearance-none border rounded-md w-full py-1 px-3 leading-tight focus:outline-none focus:ring-2 ${inputBg} ${inputFocusRing} ${isBelowAverage ? "border-red-600" : ""
                        }`}
                      min="0"
                      max="20"
                      step="0.25"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div
          className={`text-right mb-8 text-xl font-semibold ${theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
        >
          Moyenne générale :{" "}
          <span className={averageGrade < 10 ? "text-red-600" : ""}>{averageGrade}</span> / 20
        </div>

        <div className="h-80">
          <Bar data={data} options={{
            scales: {
              y: {
                beginAtZero: true,
                max: 20,
                ticks: {
                  stepSize: 2,
                  color: theme === "dark" ? "#93c5fd" : "#2563EB",
                  font: { weight: "bold" },
                },
                grid: { color: theme === "dark" ? "#334155" : "#e5e7eb" },
              },
              x: {
                ticks: {
                  color: theme === "dark" ? "#93c5fd" : "#2563EB",
                  font: { weight: "bold" },
                },
                grid: { display: false },
              },
            },
            plugins: {
              legend: {
                labels: { color: theme === "dark" ? "#93c5fd" : "#2563EB", font: { weight: "bold" } },
              },
              tooltip: { enabled: true, mode: "nearest", intersect: false },
              title: { display: false },
            },
            interaction: { mode: "nearest", intersect: false },
            maintainAspectRatio: false,
          }} />
        </div>
      </div>
    </div>
  );
};

export default NotesTracker;
