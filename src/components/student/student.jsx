import React from 'react';
import styles from './student.module.css';

const Student = ({student}) => {
  return(
    <li className={styles.student}>{student.name}</li>
  );
};

export default Student;