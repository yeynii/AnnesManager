import React from 'react';
import styles from "./course.module.css";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

const Course = ({student, course, onDeleteCourse}) => {
  const onClick = () => {
    onDeleteCourse(student, course);
  }
  return(
    <li className={styles.course}>
      <div className={styles.info}>
        <div className={styles.subject}>{course && course.subject}</div>
        <div className={styles.time}>{course && course.time}</div>
        <div className={styles.teacher}>{course && course.teacher}</div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.delete} onClick={onClick}>
          <AiFillDelete /></button>
      </div>
    </li>
  );
};

export default Course;