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
    setStudents((student) => {
      const updated = { ...students };
      updated[studentId] = student;
      return updated;
    });
    studentRepository.saveStudent(userId, student);
  };
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
          로그아웃
        </button>
      </header>
      <div className={styles.container}>
        <Students
          onAdd={createStudent}
          students={students}
          openInformation={openInformation}
          selectedId={studentId}
        />
        <Information student={students[studentId]}/>
      </div>
      <footer className={styles.footer}>Believe in yourself</footer>
    </section>
  );
};

export default Manager;
