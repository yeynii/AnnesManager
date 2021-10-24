import React, { useRef, useEffect, useState } from "react";
import styles from "./memo_add_form.module.css";

const MemoAddForm = ({student, onCreateMemo}) => {
  const onClick = event => {
    event.preventDefault();
    onCreateMemo(student, {
      id: Date.now(),
      content: ''
    });
  };

  return(
    <div className={styles.memo}>
      <button className={styles.plus} onClick={onClick}>+</button>
    </div>

  );
}

export default MemoAddForm;