import { useState, useEffect } from "react";

export const useCourseTracker = (navigate) => {
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

    return { setName, teacher, setTeacher, content, setContent, importantDates, setImportantDates, handleAddCourse, courses, goToDetail, handleDeleteCourse };
};

