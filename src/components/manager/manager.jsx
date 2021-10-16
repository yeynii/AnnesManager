import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from "react-router";
import styles from './manager.module.css';
import Students from './../students/students';
import Profile from './../profile/profile';

const Manager = ({authService, studentRepository}) => {
  const historyState = useHistory().state;
  const [students, setStudents] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();
  const onLogout = useCallback(() => {
    authService.logout();
  },[authService]);

  const createStudent = student => {
    setStudents((student) => {
      const updated = { ...students };
      updated[student.id] = student;
      return updated;
    });
    studentRepository.saveStudent(userId, student);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      }
        else{
          history.push("/");
        }
    });
  },[history, authService]);

  return(
    <section className={styles.manager}>
      <header className={styles.header}>
        <div className={styles.headerText}>Annes Manager</div>
        <button className={styles.logOut} onClick={onLogout}>로그아웃</button>
      </header>
      <div className={styles.container}>
        <Students onAdd={createStudent}/>
        <Profile/>
      </div>
      <footer className={styles.footer}>Believe in yourself</footer>
    </section>
  );
}

export default Manager;