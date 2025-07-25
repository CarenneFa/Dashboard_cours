import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useSettings } from "../hooks/useSettings";
import { SettingsFooter, SettingsForm, SettingsHeader } from "../components/Settings";

const SettingsPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isEditing, handlePhotoChange, handleSubmit, handleCancel, firstName,
    lastName, email, photo, password, setFirstName, setLastName, setPassword, setIsEditing } = useSettings();

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-8 ${theme === "dark"
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
        : "bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-900"
        }`}
    >
      <div className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-xl shadow-lg max-w-md w-full p-8`}>
        <SettingsHeader />

        <SettingsForm handleSubmit={handleSubmit} photo={photo} isEditing={isEditing} handlePhotoChange={handlePhotoChange} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} password={password} setPassword={setPassword} setIsEditing={setIsEditing} handleCancel={handleCancel} />

        <hr className={`my-8 ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`} />

        <SettingsFooter theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default SettingsPage;



