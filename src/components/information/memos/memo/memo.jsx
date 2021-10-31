import React, { useState } from "react";
import styles from "./memo.module.css";

const Memo = ({ student, memo, removeInformation, createOrUpdateInformation }) => {
  const {content} = memo;
  const [updated, setUpdated] = useState(memo);
  const onClick = event => {
    event.preventDefault();
    removeInformation(student, memo, 'memo');
  };

  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    setUpdated({...updated, content : event.currentTarget.value});
    createOrUpdateInformation(student, updated, 'memo');
  }
  return (
    <li className={styles.memo}>
      <button className={styles.delete} onClick={onClick}>
        X
      </button>
      <textarea
        defaultValue={content}
        name="content"
        className={styles.content}
        onChange={onChange}
      />
    </li>
  );
};

export default Memo;
