import React from "react";
import styles from "./courses.module.css";
import Course from "./course/course";
import CourseAddForm from "./course_add_form/course_add_form";

const Courses = ({ onCreateCourse, student, onDeleteCourse }) => {
  return (
    <ul className={styles.courses}>
    <CourseAddForm student={student} onCreateCourse={onCreateCourse} />
      {student.courses &&
        Object.keys(student.courses).map((key) => (
          <Course
            student={student}
            key={key}
            course={student.courses[key]}
            onDeleteCourse={onDeleteCourse}
          />
        ))}
    </ul>
  );
};

export default Courses;
