import React from "react";
import styles from "./memos.module.css";
import Memo from "./Memo/Memo";
import MemoAddForm from "./MemoAddForm/MemoAddForm";

const Memos = ({userName, student, createOrUpdateInformation, removeInformation}) => {
  return (
    <>
      <ul className={styles.memos}>
      {student.memos &&
        Object.keys(student.memos).map((key) => (
          <Memo
            userName={userName}
            student={student}
            key={key}
            memo={student.memos[key]}
            removeInformation={removeInformation}
            createOrUpdateInformation={createOrUpdateInformation}
          />
        ))}
        <MemoAddForm userName={userName} student={student} createOrUpdateInformation={createOrUpdateInformation}/>
      </ul>
    </>
  );
};

export default Memos;
