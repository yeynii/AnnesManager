import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./owner.module.css";

const Owner = ({ studentRepository, authService }) => {
  const history = useHistory();
  const historyState = useHistory().state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [students, setStudents] = useState();
  const goHome = () => {
    history.push({ pathname: "/home", state: { id: userId } });
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
    const stopSync = studentRepository.syncStudents((students) =>
      setStudents(students)
    );
    return () => stopSync();
  }, [userId, studentRepository]);

  return (
    <div className={styles.container}>
      <button className={styles.return} onClick={goHome}>
        돌아가기 💨 💨
      </button>
      <div className={styles.ownerMenu}>
        <h2>관리자 도구(만드는 중)</h2>
        <div className={styles.buttons}>
          <button className={styles.button}>학년증가</button>
          <button className={styles.button}>학년감소</button>
          <button className={styles.button}>삭제</button>
        </div>
        <div className={styles.editorheader}>
          <input type="checkbox" className={styles.checkbox} />{" "}
          <label> 전체선택</label>
        </div>
        <div className={styles.editor}>
          <div className={styles.editorMain}>
            <ul className={styles.studentList}>
              {students &&
                Object.keys(students)
                  .sort((a, b) =>
                    students[a].name > students[b].name ? 1 : -1
                  )
                  .map((key) => (
                    <li key={key}>
                      <input type="checkbox" className={styles.checkbox} />
                      {students[key].name} {students[key].grade}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
