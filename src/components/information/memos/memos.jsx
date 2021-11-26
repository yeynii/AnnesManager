import React from "react";
import styles from "./memos.module.css";
import Memo from "./Memo/Memo";
import MemoAddForm from "./MemoAddForm/MemoAddForm";

const Memos = ({student, createOrUpdateInformation, removeInformation}) => {
  return (
    <>
      <ul className={styles.memos}>
      {student.memos &&
        Object.keys(student.memos).map((key) => (
          <Memo
            student={student}
            key={key}
            memo={student.memos[key]}
            removeInformation={removeInformation}
            createOrUpdateInformation={createOrUpdateInformation}
          />
        ))}
        <MemoAddForm student={student} createOrUpdateInformation={createOrUpdateInformation}/>
      </ul>
    </>
  );
};

export default Memos;
