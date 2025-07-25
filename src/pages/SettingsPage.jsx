import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useSettings } from "../hooks/useSettings";
import { SettingsFooter, SettingsForm, SettingsHeader } from "../components/Settings";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-xl shadow-lg max-w-md w-full p-8`}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <SettingsHeader />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <SettingsForm handleSubmit={handleSubmit} photo={photo} isEditing={isEditing} handlePhotoChange={handlePhotoChange} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} password={password} setPassword={setPassword} setIsEditing={setIsEditing} handleCancel={handleCancel} />
        </motion.div>

        <hr className={`my-8 ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`} />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <SettingsFooter theme={theme} toggleTheme={toggleTheme} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SettingsPage;



