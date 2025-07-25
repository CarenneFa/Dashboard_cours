import { useContext } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { ThemeContext } from "../context/ThemeContext";
import { useNotesTracker } from "../hooks/useNotesTracker";
import { NotesTrackerHeader, NotesTrackerTable, NotesTrackerChart } from "../components/NotesTracker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const NotesTrackerPage = () => {
  const { theme } = useContext(ThemeContext);
  const { courses, grades, updateGrade, averageGrade, tableHeaderBg, tableHeaderText, tableRowHover, inputBg, inputFocusRing, data } = useNotesTracker(theme);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`} >
      <div
        className={`w-full max-w-3xl shadow-lg rounded-lg px-10 pt-8 pb-10 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
      >
        <NotesTrackerHeader theme={theme} />

        {/* Table des notes */}
        <NotesTrackerTable tableHeaderBg={tableHeaderBg} courses={courses} grades={grades} tableHeaderText={tableHeaderText} tableRowHover={tableRowHover} updateGrade={updateGrade} inputBg={inputBg} inputFocusRing={inputFocusRing} />

        <div
          className={`text-right mb-8 text-xl font-semibold ${theme === "dark" ? "text-blue-400" : "text-blue-600"
            }`}
        >
          Moyenne générale :{" "}
          <span className={averageGrade < 10 ? "text-red-600" : ""}>{averageGrade}</span> / 20
        </div>

        <NotesTrackerChart data={data} theme={theme} />
      </div>
    </div>
  );
};

export default NotesTrackerPage;
