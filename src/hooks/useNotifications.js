import { useState } from "react";

export const useNotifications = () => {
    // Prendre les notifications depuis le localStorage ou fallback par défaut
    const [notifications, setNotifications] = useState(
        JSON.parse(localStorage.getItem("notifications")) || [
            { id: 1, message: "Examen de Mathématiques le 25 juin", read: false },
            { id: 2, message: "Devoir en Informatique à rendre demain", read: false },
            { id: 3, message: "Cours d'Anglais reporté", read: true },
        ]
    );

    // Sauvegarder les changements dans le localStorage
    const saveToLocalStorage = (newNotifs) => {
        localStorage.setItem("notifications", JSON.stringify(newNotifs));
    };

    const markAsRead = (id) => {
        const newNotifs = notifications.map((notif) =>
            notif.id === id ? { ...notif, read: true } : notif
        );
        setNotifications(newNotifs);
        saveToLocalStorage(newNotifs);
    };

    const deleteNotification = (id) => {
        const newNotifs = notifications.filter((notif) => notif.id !== id);
        setNotifications(newNotifs);
        saveToLocalStorage(newNotifs);
    };

    return { notifications, markAsRead, deleteNotification };
};