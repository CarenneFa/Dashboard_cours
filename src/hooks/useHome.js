import { useState, useEffect } from "react";

export const useHome = () => {
    const [userName, setUserName] = useState("");
    const [photo, setPhoto] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            setUserName(currentUser.firstName || "Utilisateur");
            setPhoto(currentUser.profilePicture || "");
        }

        const updateTime = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString("fr-FR", {
                    hour: "2-digit",
                    minute: "2-digit",
                })
            );
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return { userName, photo, currentTime };
};