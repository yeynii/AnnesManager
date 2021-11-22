import React, { useState, useEffect } from "react";
import styles from "./students.module.css";
import StudentAddForm from "./student_add_form/student_add_form";
import Student from "./student/student";
import SearchBar from "../search_bar/SearchBar";

const Students = ({ createOrUpdateStudent, students, openInformation, selectedId, search }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchedStudents, setSearchedStudents] = useState();
  const [onSearch, setOnSearch] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
    setOnSearch(false);
  }

  const getSearchedStudents = (keyword, searched) => {
    if (keyword.length == 0){
      setOnSearch(false);
      return
    }
    setOnSearch(true);
    setSearchedStudents(searched);
  }

  return (
    <section className={styles.students}>
      <h1 className={styles.title}>학생 목록</h1>
      <SearchBar search={search} getSearchedStudents={getSearchedStudents}/>
      <ul className={styles.studentList}>
        {onSearch && searchedStudents && Object.keys(searchedStudents)
        .sort((a, b) => searchedStudents[a].name > searchedStudents[b].name? 1: -1)
        .map((key) => (
          <Student
            key={key}
            student={searchedStudents[key]}
            openInformation={openInformation}
            selectedId={selectedId}
          />
        ))}
        {!onSearch && Object.keys(students)
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
