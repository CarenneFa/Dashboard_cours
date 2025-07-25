export default function SettingsForm({ handleSubmit, photo, isEditing, handlePhotoChange, firstName, setFirstName, lastName, setLastName, email, password, setPassword, setIsEditing, handleCancel }) {
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center">
                {photo ? (
                    <img
                        src={photo}
                        alt="Photo de profil"
                        className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100" />
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
                            className="hidden" />
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
                        : "border-transparent bg-gray-100 text-gray-500 cursor-not-allowed"} focus:outline-none focus:ring-2 focus:ring-blue-400`} />
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
                        : "border-transparent bg-gray-100 text-gray-500 cursor-not-allowed"} focus:outline-none focus:ring-2 focus:ring-blue-400`} />
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
                    className="w-full px-4 py-2 rounded-lg border border-transparent bg-gray-100 text-gray-500 cursor-not-allowed" />
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
                        : "border-transparent bg-gray-100 text-gray-500 cursor-not-allowed"} focus:outline-none focus:ring-2 focus:ring-blue-400`} />
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
    );
}