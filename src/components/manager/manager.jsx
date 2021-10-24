import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./manager.module.css";
import Students from "./../students/students";
import Information from "../information/information";

const Manager = ({ authService, studentRepository }) => {
  const historyState = useHistory().state;
  const [students, setStudents] = useState({});
  const [studentId, setStudentId] = useState();
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  const openInformation = (id) => {
    setStudentId(id);
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [history, authService]);

  const createStudent = (student) => {
    setStudents(() => {
      const updated = { ...students };
      updated[student.id] = student;
      return updated;
    });
    studentRepository.saveStudent(student);
  };

  const createCourse = (student, course) => {
    const updated = { ...student["courses"] };
    updated[course.id] = course;
    createStudent({ ...student, courses: updated });
  };

  const createBook = (student, book) => {
    const updated = { ...student["books"] };
    updated[book.id] = book;
    createStudent({ ...student, books: updated });
  };

  const createMemo = (student, memo) => {
    const updated = { ...student["memos"] };
    updated[memo.id] = memo;
    createStudent({ ...student, memos: updated });
  };

  const removeStudent = (student) => {
    setStudents(() => {
      const updated = { ...students };
      delete updated[student.id];
      return updated;
    });
    setStudentId();
    studentRepository.removeStudent(student);
  };

  const removeCourse = (student, course) => {
    const updated = { ...student["courses"] };
    delete updated[course.id];
    createStudent({ ...student, courses: updated });
    studentRepository.removeCourse(student, course);
  };

  const removeBook = (student, book) => {
    const updated = { ...student["books"] };
    delete updated[book.id];
    createStudent({ ...student, books: updated });
    studentRepository.removeBook(student, book);
  };

  const changeBookStatus = (student, book, clicked) => {
    const updated = { ...student["books"] };
    updated[book.id][clicked] = !updated[book.id][clicked];
    createStudent({ ...student, books: updated });    
  };
  
  const UpdateStudent = () =>{};

  const createConsulting = (student, consulting) => {
    const updated = { ...student["consultings"] };
    updated[consulting.id] = consulting;
    createStudent({ ...student, consultings: updated });
  };

  const removeConsulting = (student, consulting) => {
    const updated = { ...student["consultings"] };
    delete updated[consulting.id];
    createStudent({ ...student, consultings: updated });
    studentRepository.removeConsulting(student, consulting);
  };

  const removeMemo = (student, memo)=> {
    const updated = { ...student["memos"] };
    delete updated[memo.id];
    createStudent({ ...student, memos: updated });
    studentRepository.removeMemo(student, memo);
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = studentRepository.syncStudents((students) =>
      setStudents(students)
    );
    return () => stopSync();
  }, [userId, studentRepository]);

  return (
    <section className={styles.manager}>
      <header className={styles.header}>
        <div className={styles.headerText}>Annes Manager</div>
        <button className={styles.logOut} onClick={onLogout}>
          logout
        </button>
      </header>
      <div className={styles.container}>
        <Students
          onAdd={createStudent}
          students={students}
          openInformation={openInformation}
          selectedId={studentId}
        />
        {studentId && (
          <Information
            student={students[studentId]}
            onUpdateStudent={createStudent}
            onDeleteStudent={removeStudent}
            onCreateCourse={createCourse}
            onCreateBook={createBook}
            onDeleteCourse={removeCourse}
            onDeleteBook={removeBook}
            onChangeBookStatus={changeBookStatus}
            onCreateConsulting={createConsulting}
            onDeleteConsulting={removeConsulting}
            onUpdateConsulting={createConsulting}
            onCreateMemo={createMemo}
            onDeleteMemo={removeMemo}
          />
        )}
      </div>
    </section>
  );
};

export default Manager;
