export default function HomeHero({ photo, userName, currentTime }) {
    return (
        <div className="flex flex-col items-center justify-center h-72 text-center mb-8">
            {photo ? (
                <img
                    src={photo}
                    alt="Profil"
                    className="w-28 h-28 rounded-full object-cover mb-4 shadow-md"
                />
            ) : (
                <div className="w-28 h-28 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 mb-4">
                    Pas de photo
                </div>
            )}
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-300">
                Bienvenue, {userName} !
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
                Il est actuellement <strong>{currentTime}</strong>.
            </p>
        </div>
    )
}
