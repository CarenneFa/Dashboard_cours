import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useCourseDetail } from "../hooks/useCourseDetail";
import { NoCourseFound, CourseEditForm, CourseDetailSection } from "../components/Courses";

const CourseDetailPage = () => {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const { course, isEditing, setIsEditing, formData, handleChange, handleSave } = useCourseDetail(id);

  if (!course) {
    return <NoCourseFound theme={theme} navigate={navigate} />
  }

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
        {!isEditing ? (
          <CourseDetailSection course={course} navigate={navigate} setIsEditing={setIsEditing} />
        ) : (
          <CourseEditForm handleSave={handleSave} course={course} formData={formData} handleChange={handleChange} theme={theme} setIsEditing={setIsEditing} />
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;