import React, { useState } from "react";
import styles from "./students.module.css";
import AddModal from "../add_modal/add_modal";

const Students = ({onAdd}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section className={styles.students}>
      <h1 className={styles.title}>학생 목록</h1>
      <ul>
        <li>김상현</li>
        <li>정라혜</li>
        <li>박서준</li>
        <li>전민준</li>
      </ul>
      <button
        className={styles.addStudents}
        onClick={() => setModalIsOpen(true)}
      >
        +
      </button>
      <AddModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} onAdd={onAdd}/>
    </section>
  );
};

export default Students;
