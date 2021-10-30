import React, { useRef, useEffect } from "react";
import styles from "./memo.module.css";

const Memo = ({ student, memo, removeInformation, createOrUpdateInformation }) => {
  const content = memo.content;
  const contentRef = useRef();
  const onClick = (event) => {
    event.preventDefault();
    removeInformation(student, memo, 'memo');
  };

  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    createOrUpdateInformation(student, {...memo, content: contentRef.current.value},'memo');
  }
  useEffect(() => {
    contentRef.current.value = content;
    console.log(contentRef);
  }, [content]);
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
