import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      setError("Email ou mot de passe incorrect !");
      return;
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    navigate("/home");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${theme === "dark"
        ? "bg-gray-900 text-white"
        : "bg-gradient-to-r from-blue-100 to-white text-black"
        }`}
    >
      <div className="flex w-full max-w-4xl shadow-lg rounded-xl overflow-hidden">
        {/* 📸 Image à gauche */}
        <div
          className="hidden md:block md:w-1/2 h-[450px] bg-cover bg-center"
          style={{ backgroundImage: "url('/auth-image.png')" }}
        ></div>

        {/* 🔐 Formulaire à droite */}
        <div
          className={`w-full md:w-1/2 p-8 md:p-12 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
            Connexion
          </h2>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400"
                  : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500"
                  }`}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Mot de passe</label>
              <input
                type="password"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${theme === "dark"
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400"
                  : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500"
                  }`}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Se connecter
              </button>
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-blue-500 hover:underline text-sm"
              >
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
