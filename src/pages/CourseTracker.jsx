import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useCourseTracker } from "../hooks/useCourseTracker";
import { CourseTrackerHeader, CourseAddForm, CourseList } from "../components/Courses";

const CourseTracker = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const { setName, teacher, setTeacher, content, setContent, importantDates, setImportantDates, handleAddCourse, courses, goToDetail, handleDeleteCourse } = useCourseTracker(navigate);

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
        <CourseTrackerHeader navigate={navigate} />

        {/* Formulaire */}
        <CourseAddForm setName={setName} theme={theme} teacher={teacher} setTeacher={setTeacher} content={content} setContent={setContent} importantDates={importantDates} setImportantDates={setImportantDates} handleAddCourse={handleAddCourse} />

        {/* Liste des cours */}
        <CourseList courses={courses} theme={theme} goToDetail={goToDetail} handleDeleteCourse={handleDeleteCourse} />
      </div>
    </div>
  );
};

export default CourseTracker;

