import { useState, useEffect } from 'react';

export const useSettings = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    const [isEditing, setIsEditing] = useState(true);
    const [originalUser, setOriginalUser] = useState(null);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            setFirstName(currentUser.firstName || "");
            setLastName(currentUser.lastName || "");
            setEmail(currentUser.email || "");
            setPhoto(currentUser.profilePicture || "");
            setPassword(currentUser.password || "");
            setOriginalUser(currentUser);
        }
    }, []);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPhoto(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            firstName,
            lastName,
            email,
            password,
            profilePicture: photo,
        };
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
        setOriginalUser(updatedUser);
        setIsEditing(false);
    };

    const handleCancel = () => {
        if (originalUser) {
            setFirstName(originalUser.firstName || "");
            setLastName(originalUser.lastName || "");
            setEmail(originalUser.email || "");
            setPassword(originalUser.password || "");
            setPhoto(originalUser.profilePicture || "");
        }
        setIsEditing(false);
    };

    return {
        isEditing, handlePhotoChange, handleSubmit, handleCancel, firstName,
        lastName, email, photo, password, setFirstName, setLastName, setPassword, setIsEditing
    };
};