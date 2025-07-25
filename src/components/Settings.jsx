import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Settings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [originalUser, setOriginalUser] = useState(null);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

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

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-8 ${theme === "dark"
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
        : "bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-900"
        }`}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md w-full p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 text-center">
            Paramètres du profil
          </h1>
          <button
            onClick={() => navigate("/home")}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
          >
            Accueil
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
            {photo ? (
              <img
                src={photo}
                alt="Photo de profil"
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-blue-100 mb-4 flex items-center justify-center text-blue-300 text-xl font-semibold">
                ?
              </div>
            )}
            {isEditing && (
              <>
                <label
                  htmlFor="photo-upload"
                  className="text-blue-600 dark:text-blue-400 underline cursor-pointer text-sm mb-2"
                >
                  Modifier la photo
                </label>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </>
            )}
          </div>

          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={!isEditing}
              required
              className={`w-full px-4 py-2 rounded-lg border ${isEditing
                ? "border-blue-400 bg-white text-gray-900 cursor-text"
                : "border-transparent bg-gray-100 text-gray-500 cursor-not-allowed"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              disabled={!isEditing}
              required
              className={`w-full px-4 py-2 rounded-lg border ${isEditing
                ? "border-blue-400 bg-white text-gray-900 cursor-text"
                : "border-transparent bg-gray-100 text-gray-500 cursor-not-allowed"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full px-4 py-2 rounded-lg border border-transparent bg-gray-100 text-gray-500 cursor-not-allowed"
            />
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
              L&apos;email ne peut pas être modifié.
            </p>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!isEditing}
              required
              className={`w-full px-4 py-2 rounded-lg border ${isEditing
                ? "border-blue-400 bg-white text-gray-900 cursor-text"
                : "border-transparent bg-gray-100 text-gray-500 cursor-not-allowed"
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
          </div>

          <div className="flex justify-between items-center">
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                Modifier
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
                >
                  Enregistrer
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg transition"
                >
                  Annuler
                </button>
              </>
            )}
          </div>
        </form>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
            Thème
          </h2>
          <p className="mb-4 text-center">
            Thème actuel :{" "}
            <span className="font-semibold">{theme === "light" ? "Clair" : "Sombre"}</span>
          </p>
          <button
            onClick={toggleTheme}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Passer en mode {theme === "light" ? "Sombre" : "Clair"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
