import React, { useState } from "react";
import styles from "./course_add_form.module.css";
import { BsPlusLg } from "react-icons/bs";
import Modal from "react-modal";

const CourseAddForm = ({ createOrUpdateInformation, student }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [subject, setSubject] = useState();
  const [teacher, setTeacher] = useState();
  const [time, setTime] = useState();

  const onClick = (event) => {
    event.preventDefault();
    if (subject == null || subject.length === 0) {
      alert("과목을 입력하지 않았습니다");
      return;
    }
    if (teacher == null || teacher.length === 0) {
      alert("선생님을 입력하지 않았습니다");
      return;
    }
    if (time == null || time.length === 0) {
      alert("시간을 입력하지 않았습니다");
      return;
    }
    createOrUpdateInformation(student, { id: Date.now(), subject, teacher, time }, "course");
    setSubject();
    setTeacher();
    setTime();
    setModalIsOpen(false);
  };

  const onChange = (event, setFn) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    setFn(event.currentTarget.value);
  };

  const onCancel = (event) => {
    event.preventDefault();
    setModalIsOpen(false);
  };

  return (
    <>
      <li className={styles.course} onClick={() => setModalIsOpen(true)}>
        <div className={styles.plus}>
          <BsPlusLg />
        </div>
      </li>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "400px",
            height: "100px",
            background: "white",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            padding: "20px",
          },
        }}
      >
        <form className={styles.form}>
          <div className={styles.contents}>
            <label htmlFor="time">시간</label>
            <select className={styles.select} onChange={(event) => onChange(event, setTime)}>
              <option value="">선택</option>
              <option value="2">2시</option>
              <option value="3">3시</option>
              <option value="4">4시</option>
              <option value="5">5시</option>
              <option value="6">6시</option>
              <option value="7">7시</option>
            </select>
          </div>
          <div className={styles.contents}>
            <label htmlFor="subject">과목</label>
            <select className={styles.select} onChange={(event) => onChange(event, setSubject)}>
              <option value="">선택</option>
              <option value="국어">국어</option>
              <option value="수학">수학</option>
              <option value="영어">영어</option>
              <option value="역사">역사</option>
              <option value="독서">독서</option>
            </select>
          </div>
          <div className={styles.contents}>
            <label htmlFor="teacher">선생님</label>
            <select className={styles.select} onChange={(event) => onChange(event, setTeacher)}>
              <option value="">선택</option>
              <option value="Anne">Anne</option>
              <option value="Chloe">Chloe</option>
              <option value="Daniel">Daniel</option>
              <option value="Diana">Diana</option>
              <option value="Ella">Ella</option>
              <option value="Eva">Eva</option>
              <option value="Lina">Lina</option>
              <option value="Luby">Luby</option>
              <option value="Paul">Paul</option>
              <option value="Sherion">Sherion</option>
              <option value="Sophie">Sophie</option>
              <option value="Tom">Tom</option>
            </select>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={onClick}>
              저장
            </button>
            <button
              className={`${styles.button} ${styles.grey}`}
              onClick={onCancel}
            >
              취소
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CourseAddForm;
