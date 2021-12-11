import React from "react";
import styles from "./memoAddForm.module.css";

const MemoAddForm = ({userName, student, createOrUpdateInformation}) => {
  const onClick = event => {
    event.preventDefault();
    const today = Date.now();
    createOrUpdateInformation(student, {
      id: today,
      content: '',
      name: userName,
      date: today
    },'memo');
  };

  return(
    <div className={styles.memo}>
      <button className={styles.plus} onClick={onClick}>+</button>
    </div>

  );
}

export default MemoAddForm;