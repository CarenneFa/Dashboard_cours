export default function CourseDetailSection({ course, navigate, setIsEditing }) {
    return (
        <>
            <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
                Détails du cours : {course.name}
            </h1>
            <p className="mb-2">
                <strong>Enseignant :</strong> {course.teacher || "Non renseigné"}
            </p>
            <p className="mb-2">
                <strong>Contenu :</strong> {course.content || "Non renseigné"}
            </p>
            <p>
                <strong>Dates importantes :</strong>
            </p>
            <ul className="list-disc pl-5 mb-4">
                {course.importantDates && course.importantDates.length > 0 ? (
                    course.importantDates.map((date, index) => (
                        <li key={index}>{date}</li>
                    ))
                ) : (
                    <li>Aucune date importante</li>
                )}
            </ul>
            <div className="mt-6 flex justify-center space-x-4">
                <button
                    onClick={() => navigate("/courses")}
                    className="font-bold py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-700 text-white"
                >
                    Retour aux cours
                </button>
                <button
                    onClick={() => navigate("/home")}
                    className="font-bold py-2 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-700 text-white"
                >
                    Accueil
                </button>
                <button
                    onClick={() => setIsEditing(true)}
                    className="font-bold py-2 px-4 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white"
                >
                    Modifier
                </button>
            </div>
        </>
    );
}

