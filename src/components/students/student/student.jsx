import React, {useEffect, useState} from "react";
import styles from "./student.module.css";

const Student = ({ student, openInformation, selectedId }) => {
  const {name} = student;
  const [grade, setGrade] = useState();
  const onClick = (id) => {
    id && openInformation(id);
  };
  useEffect(() => {
    if (student.grade <= 6 ){
      setGrade("초"+student.grade);
    }
    else if (student.grade <= 9){
      setGrade("중"+(student.grade-6));
    }
    else{
      setGrade("고등");
    }
  }, [student]);

  return (
    <li
      key={student.id}
      className={`${styles.student} ${selectedId === student.id && styles.selected}`}
      onClick={() => onClick(student.id)}
    >
      <div className={styles.name}>{name}</div>
      <div className={styles.grade}>{grade}</div>
    </li>
  );
};

export default Student;
