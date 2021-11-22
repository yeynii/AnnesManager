import React, { useState } from "react";
import styles from "./students.module.css";
import StudentAddForm from "./student_add_form/student_add_form";
import Student from "./student/student";
import SearchBar from "../search_bar/SearchBar";

const Students = ({ createOrUpdateStudent, students, openInformation, selectedId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [keyword, setKeyword] =useState('');

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const getSearchedStudents = word => {
    setKeyword(word);
  }

  return (
    <section className={styles.students}>
      <h1 className={styles.title}>학생 목록</h1>
      <SearchBar getSearchedStudents={getSearchedStudents}/>
      <ul className={styles.studentList}>
        {students && Object.keys(students)
        .filter(key => students[key].name.includes(keyword))
        .sort((a, b) => students[a].name > students[b].name? 1: -1)
        .map((key) => (
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
        closeModal={closeModal}
        createOrUpdateStudent={createOrUpdateStudent}
      />
      
    </section>
  );
};

export default Students;
