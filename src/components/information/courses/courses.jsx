import React from "react";
import styles from "./courses.module.css";
import Course from "./course/course";
import CourseAddForm from "./course_add_form/course_add_form";

const Courses = ({ onAdd, student, onCourseDelete }) => {
  return (
    <ul className={styles.courses}>
      {student.courses && Object.keys(student.courses).map( key => 
        <Course student={student} key={key} course={student.courses[key]} onCourseDelete={onCourseDelete}/>)}
      <CourseAddForm student={student} onAdd={onAdd} />
    </ul>
  );
};

export default Courses;
