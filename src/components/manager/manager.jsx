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

  const createStudent = (student) => {
    setStudents(() => {
      const updated = { ...students };
      updated[student.id] = student;
      return updated;
    });
    studentRepository.saveStudent(userId, student);
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

  const removeStudent = (student) => {
    setStudents(() => {
      const updated = { ...students };
      delete updated[student.id];
      return updated;
    });
    setStudentId();
    studentRepository.removeStudent(userId, student);
  };

  const removeCourse = (student, course) => {
    const updated = { ...student["courses"] };
    delete updated[course.id];
    createStudent({ ...student, courses: updated });
    studentRepository.removeCourse(userId, student, course);
  };

  const removeBook = (student, book) => {
    const updated = { ...student["books"] };
    delete updated[book.id];
    createStudent({ ...student, books: updated });
    studentRepository.removeBook(userId, student, book);
  };

  const changeBookStatus = (student, book, clicked) => {
    const updated = { ...student["books"] };
    updated[book.id][clicked] = !updated[book.id][clicked];
    createStudent({ ...student, books: updated });    
  }
  
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

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = studentRepository.syncStudents(userId, (students) =>
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
            onDeleteStudent={removeStudent}
            onCreateCourse={createCourse}
            onCreateBook={createBook}
            onDeleteCourse={removeCourse}
            onDeleteBook={removeBook}
            onChangeBookStatus={changeBookStatus}
          />
        )}
      </div>
    </section>
  );
};

export default Manager;
