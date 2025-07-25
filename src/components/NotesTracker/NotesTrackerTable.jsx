export default function NotesTrackerTable({ tableHeaderBg, courses, grades, tableHeaderText, tableRowHover, updateGrade, inputBg, inputFocusRing }) {
    return (
        <table
            className={`table-auto w-full mb-6 border-collapse border rounded-md overflow-hidden border-gray-300`}
        >
            <thead className={tableHeaderBg}>
                <tr>
                    <th
                        className={`px-6 py-3 text-left font-semibold border-b border-gray-300 ${tableHeaderText}`}
                    >
                        Cours
                    </th>
                    <th
                        className={`px-6 py-3 text-left font-semibold border-b border-gray-300 ${tableHeaderText}`}
                    >
                        Note / 20
                    </th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course) => {
                    const grade = grades[course.id];
                    const isBelowAverage = grade !== undefined && grade !== "" && grade < 10;
                    return (
                        <tr key={course.id} className={`border-b border-gray-200 ${tableRowHover}`}>
                            <td className="px-6 py-3">{course.name}</td>
                            <td
                                className={`px-6 py-3 ${isBelowAverage ? "text-red-600 font-semibold" : ""
                                    }`}
                            >
                                <input
                                    type="number"
                                    value={grade || ""}
                                    onChange={(e) => updateGrade(course.id, e.target.value)}
                                    className={`shadow-sm appearance-none border rounded-md w-full py-1 px-3 leading-tight focus:outline-none focus:ring-2 ${inputBg} ${inputFocusRing} ${isBelowAverage ? "border-red-600" : ""
                                        }`}
                                    min="0"
                                    max="20"
                                    step="0.25"
                                />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}
