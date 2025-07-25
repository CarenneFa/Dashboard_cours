export default function NoNotificationFound({ theme }) {
    return (
        <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-500"} text-center text-lg`}>
            Aucune notification pour le moment.
        </p>
    );
};