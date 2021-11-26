import React from "react";
import styles from "./courses.module.css";
import Course from "./Course/Course";
import CourseAddForm from "./CourseAddForm/CourseAddForm";

const Courses = ({ createOrUpdateInformation, student, removeInformation }) => {
  return (
    <ul className={styles.courses}>
    <CourseAddForm student={student} createOrUpdateInformation={createOrUpdateInformation} />
       {student.courses &&
        Object.keys(student.courses).map((key) => (
          <Course
            student={student}
            key={key}
            course={student.courses[key]}
            removeInformation={removeInformation}
          />
        ))} 
    </ul>
  );
};

export default Courses;
