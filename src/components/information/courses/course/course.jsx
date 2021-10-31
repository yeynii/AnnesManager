import React from "react";
import styles from "./course.module.css";
import { AiFillDelete } from "react-icons/ai";
import useConfirm from "../../../use_confirme";

const Course = ({ student, course, removeInformation }) => {
  const {time, subject, teacher} = course;
  const onRemove = useConfirm("삭제하시겠습니까?", () =>
    removeInformation(student, course, "course")
  );

  return (
    <li className={styles.course}>
      <div className={styles.info}>
        <div className={styles.time}>{time}시</div>
        <div className={styles.subject}>{subject}</div>
        <div className={styles.teacher}>{teacher}</div>
      </div>
      <button className={styles.delete} onClick={onRemove}>
        <AiFillDelete />
      </button>
    </li>
  );
};

export default Course;
