import React, { useRef, useEffect } from "react";
import Memos from "../memos";
import styles from "./memo.module.css";

const Memo = ({ student, memo, onDeleteMemo, onUpdateMemo }) => {
  const content = memo.content;
  const contentRef = useRef();
  const onClick = (event) => {
    event.preventDefault();
    onDeleteMemo(student, memo);
  };

  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    onUpdateMemo(student, {...memo, content: contentRef.current.value});
  }
  useEffect(() => {
    contentRef.current.value = content;
  }, []);
  return (
    <li className={styles.memo}>
      <button className={styles.delete} onClick={onClick}>
        X
      </button>
      <textarea
        ref={contentRef}
        name="content"
        className={styles.content}
        onChange={onChange}
      />
    </li>
  );
};

export default Memo;
