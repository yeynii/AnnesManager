import React from "react";
import styles from "./student.module.css";

const Student = ({ student, openInformation, selectedId }) => {
  const onClick = (id) => {
    id && openInformation(id);
  };
  return (
    <li
      key={student.id}
      className={`${styles.student} ${selectedId === student.id && styles.selected}`}
      onClick={() => onClick(student.id)}
    >
      <div className={styles.name}>{student.name}</div>
      <div className={styles.grade}>{student.grade}</div>
    </li>
  );
};

export default Student;
