import { Bar } from "react-chartjs-2";

export default function NotesTrackerChart({ data, theme }) {
    return (
        <div className="h-80">
            <Bar data={data} options={{
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 20,
                        ticks: {
                            stepSize: 2,
                            color: theme === "dark" ? "#93c5fd" : "#2563EB",
                            font: { weight: "bold" },
                        },
                        grid: { color: theme === "dark" ? "#334155" : "#e5e7eb" },
                    },
                    x: {
                        ticks: {
                            color: theme === "dark" ? "#93c5fd" : "#2563EB",
                            font: { weight: "bold" },
                        },
                        grid: { display: false },
                    },
                },
                plugins: {
                    legend: {
                        labels: { color: theme === "dark" ? "#93c5fd" : "#2563EB", font: { weight: "bold" } },
                    },
                    tooltip: { enabled: true, mode: "nearest", intersect: false },
                    title: { display: false },
                },
                interaction: { mode: "nearest", intersect: false },
                maintainAspectRatio: false,
            }} />
        </div>
    )
}
