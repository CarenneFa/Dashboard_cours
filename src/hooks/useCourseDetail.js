import { useState, useEffect } from "react";

export const useCourseDetail = (id) => {
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

    return { course, isEditing, setIsEditing, formData, handleChange, handleSave };
};