import React, { useState } from "react";
import styles from "./students.module.css";
import StudentAddForm from "./student_add_form/student_add_form";
import Student from "./student/student";

const Students = ({ createOrUpdateStudent, students, openInformation, selectedId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <section className={styles.students}>
      <h1 className={styles.title}>학생 목록</h1>
      <ul className={styles.studentList}>
        {Object.keys(students).map((key) => (
          <Student
            key={key}
            student={students[key]}
            openInformation={openInformation}
            selectedId={selectedId}
          />
        ))}
      </ul>
      <button
        className={styles.addStudents}
        onClick={() => setModalIsOpen(true)}
      >
        +
      </button>
      <StudentAddForm
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        createOrUpdateStudent={createOrUpdateStudent}
      />
    </section>
  );
};

export default Students;
