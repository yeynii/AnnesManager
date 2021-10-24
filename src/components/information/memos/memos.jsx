import React from "react";
import styles from "./memos.module.css";
import Memo from "./memo/memo";
import MemoAddForm from "./memo_add_form/memo_add_form";

const Memos = ({student, onCreateMemo, onDeleteMemo}) => {
  return (
    <>
      <ul className={styles.memos}>
      {student.memos &&
        Object.keys(student.memos).map((key) => (
          <Memo
            student={student}
            key={key}
            memo={student.memos[key]}
            onDeleteMemo={onDeleteMemo}
            onUpdateMemo={onCreateMemo}
          />
        ))}
        <MemoAddForm student={student} onCreateMemo={onCreateMemo}/>
      </ul>
    </>
  );
};

export default Memos;
