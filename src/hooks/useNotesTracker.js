import { useState, useEffect } from "react";

export const useNotesTracker = (theme) => {
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

    return { courses, grades, updateGrade, averageGrade, tableHeaderBg, tableHeaderText, tableRowHover, inputBg, inputFocusRing, data };
};