import React, { useState } from "react";
import styles from "./students.module.css";
import AddModal from "../add_modal/add_modal";
import Student from './../student/student';

const Students = ({onAdd, students}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section className={styles.students}>
      <h1 className={styles.title}>학생 목록</h1>
      <ul>
        {Object.keys(students).map(key => (<Student key={key} student={students[key]} />))}
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
