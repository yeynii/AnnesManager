import React from "react";
import styles from "./memo_add_form.module.css";

const MemoAddForm = ({student, createOrUpdateInformation}) => {
  const onClick = event => {
    event.preventDefault();
    createOrUpdateInformation(student, {
      id: Date.now(),
      content: ''
    },'memo');
  };

  return(
    <div className={styles.memo}>
      <button className={styles.plus} onClick={onClick}>+</button>
    </div>

  );
}

export default MemoAddForm;