import CourseListItem from './CourseListItem';

export default function CourseList({ courses, theme, goToDetail, handleDeleteCourse }) {
    return (
        <div className="space-y-4">
            {courses.map((course, idx) => (
                <CourseListItem key={idx} course={course} theme={theme} goToDetail={goToDetail} handleDeleteCourse={handleDeleteCourse} />
            ))}
        </div>
    );
}