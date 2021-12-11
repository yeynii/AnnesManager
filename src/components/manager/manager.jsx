import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./manager.module.css";
import Students from "../Students/Students";
import Information from "../Information/Information";
import useConfirm from "../../common/useConfirm";
import Header from '../Header/Header';

const Manager = ({ authService, studentRepository, search, booksRepository, teacherRepository }) => {
  const historyState = useHistory().state;
  const [students, setStudents] = useState({});
  const [studentId, setStudentId] = useState();
  const [userName, setUserName] =useState();
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  const openInformation = id => {
    setStudentId(id);
  };

  const createOrUpdateStudent = student => {
    setStudents(() => {
      const updated = { ...students };
      updated[student.id] = student;
      return updated;
    });
    studentRepository.saveStudent(student);
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

  const createOrUpdateInformation = (student, info, infoStr) => {
    const updated = { ...student[`${infoStr}s`] };
    updated[info.id] = info;
    createOrUpdateStudent({ ...student, [`${infoStr}s`]: updated });
  };
  const removeInformation = (student, info, infoStr) => {
    setStudents(() => {
      const updated = { ...student[`${infoStr}s`] };
      delete updated[info.id];
      return updated;
    });
    studentRepository.removeInformation(student, info, infoStr);
  };

  const logOut = useConfirm("로그아웃 하시겠습니까?", onLogout);

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
    const stopSync = studentRepository.syncStudents((students) =>
      setStudents(students)
    );
    return () => stopSync();
  }, [userId, studentRepository]);

  useEffect(() =>{
    if (!userId) {
      return;
    }
    const stopSync = teacherRepository.getTeacherName(userId, (userId) => setUserName(userId));
    return () => stopSync();
  }, [userId, teacherRepository]);

  return (
    <section className={styles.manager}>
      <Header logOut={logOut} userId={userId} userName={userName}/>
      <div className={styles.container}>
        <Students
          createOrUpdateStudent={createOrUpdateStudent}
          students={students}
          openInformation={openInformation}
          selectedId={studentId}
          search={search}
          userName={userName}
        />
        {studentId && (
          <Information
            student={students[studentId]}
            createOrUpdateStudent={createOrUpdateStudent}
            removeStudent={removeStudent}
            createOrUpdateInformation={createOrUpdateInformation}
            removeInformation={removeInformation}
            search={search}
            userName={userName}
            booksRepository={booksRepository}
            teacherRepository={teacherRepository}
          />
        )}
      </div>
    </section>
  );
};

export default Manager;
