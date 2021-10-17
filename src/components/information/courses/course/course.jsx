import React from 'react';
import styles from "./course.module.css";

const Course = ({student, course, onCourseDelete}) => {
  const onClick = () => {
    onCourseDelete(student, course);
  }
  return(
    <li className={styles.course}>
      <div className={styles.info}>
        <div className={styles.subject}>{course && course.subject}</div>
        <div className={styles.time}>{course && course.time}</div>
        <div className={styles.teacher}>{course && course.teacher}</div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.delete} onClick={onClick}>삭제</button>
      </div>
    </li>
  );
};

export default Course;