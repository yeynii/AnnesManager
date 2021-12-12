import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import useConfirm from "../../common/useConfirm";
import styles from "./owner.module.css";

const Owner = ({ studentRepository, teacherRepository, authService }) => {
  const history = useHistory();
  const historyState = useHistory().state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [userName, setUserName] = useState();
  const [students, setStudents] = useState();
  const [checkedList, setCheckedLists] = useState([]);

  const goHome = () => {
    history.push({ pathname: "/home", state: { id: userId } });
  };

  const increaseGrade = useConfirm("학년을 올리시겠습니까?", () => {
    if (userName !== "Anne") {
      alert("권한이 없습니다.");
      return;
    }
    setStudents(() => {
      const updated = { ...students };
      checkedList.forEach((key) => {
        updated[key].grade++;
        studentRepository.saveStudent(updated[key]);
      });
      return updated;
    });
  });

  const decreaseGrade = useConfirm("학년을 내리시겠습니까?", () => {
    if (userName !== "Anne") {
      alert("권한이 없습니다.");
      return;
    }
    setStudents(() => {
      const updated = { ...students };
      checkedList.forEach((key) => {
        updated[key].grade--;
        studentRepository.saveStudent(updated[key]);
      });
      return updated;
    });
  });

  const onRemove = useConfirm("삭제하시겠습니까?", () => {
    if (userName !== "Anne") {
      alert("권한이 없습니다.");
      return;
    }
    setStudents(() => {
      const updated = { ...students };
      checkedList.forEach((key) => {
        delete updated[key];
        studentRepository.removeStudent({ id: key });
      });
      return updated;
    });
  });

  const onCheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray = [];
        Object.keys(students).map((key) => checkedListArray.push(key));
        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
    },
    [students]
  );

  const onCheckedElement = useCallback(
    (checked, key) => {
      if (checked) {
        setCheckedLists([...checkedList, key]);
      } else {
        setCheckedLists(checkedList.filter((el) => el !== key));
      }
    },
    [checkedList] 
  );

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
    if (userName && userName != "Anne")
      history.push("/");
  }, [history, authService, userName]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = studentRepository.syncStudents((students) =>
      setStudents(students)
    );
    return () => stopSync();
  }, [userId, studentRepository]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = teacherRepository.getTeacherName(userId, (userId) =>
      setUserName(userId)
    );
    return () => stopSync();
  }, [userId, teacherRepository]);

  return (
    <div className={styles.container}>
      <button className={styles.return} onClick={goHome}>
        돌아가기 💨 💨
      </button>
      <div className={styles.ownerMenu}>
        <h2>관리자 도구</h2>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={increaseGrade}>
            학년증가
          </button>
          <button className={styles.button} onClick={decreaseGrade}>
            학년감소
          </button>
          <button className={styles.button} onClick={onRemove}>
            삭제
          </button>
        </div>
        <div className={styles.editorheader}>
          <input
            type="checkbox"
            onChange={(e) => onCheckedAll(e.target.checked)}
            className={styles.checkbox}
          />{" "}
          <label> 전체선택</label>
        </div>
        <div className={styles.editor}>
          <div className={styles.editorMain}>
            <ul className={styles.studentList}>
              {students &&
                Object.keys(students)
                  .sort((a, b) =>
                    students[a].grade > students[b].grade ? 1 : -1
                  )
                  .map((key) => {
                    const grade =
                      students[key].grade <= 0
                        ? "7세"
                        : students[key].grade <= 6
                        ? "초" + students[key].grade
                        : students[key].grade <= 9
                        ? "중" + (students[key].grade - 6)
                        : "고등";
                    return (
                      <li key={key}>
                        <input
                          type="checkbox"
                          onChange={(e) =>
                            onCheckedElement(e.target.checked, key)
                          }
                          checked={checkedList.includes(key) ? true : false}
                          className={styles.checkbox}
                        />
                        {grade} {students[key].name}
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
