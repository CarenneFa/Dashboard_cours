import { Trash2 } from "lucide-react";

export default function CourseListItem({ course, theme, goToDetail, handleDeleteCourse }) {
    return (
        <div
            key={course.id}
            className={`flex justify-between items-start p-4 rounded-xl shadow-sm ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-50"}`}
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
    );
}

