import React, { useRef, useEffect } from "react";
import Modal from "react-modal";
import styles from "./student_edit_form.module.css";

const StudentEditForm = ({
  student,
  modalIsOpen,
  setModalIsOpen,
  onUpdateStudent,
}) => {
  const { name, grade, address, date, hp } = student;
  const nameRef = useRef();
  const gradeRef = useRef();
  const addressRef = useRef();
  const dateRef = useRef();
  const hpRef = useRef();

  const onClick = (event) => {
    event.preventDefault();
    onUpdateStudent({
      ...student,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    setModalIsOpen(false);
    hpRef.current.value='';
  };


  useEffect(() => {
    nameRef.current.value = name;
    gradeRef.current.value = grade;
    addressRef.current.value = address;
    dateRef.current.value = date;
    hpRef.current.value = hp;
  });

  return (
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
          width: "500px",
          height: "250px",
          background: "white",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          padding: "20px",
        },
      }}
    >
      <form className={styles.form}>
        <h3 className={styles.title}>학생 정보 수정</h3>
        <div className={styles.contents}>
          <label htmlFor="name">이름</label>
          <input ref={nameRef} name="name" type="text" className={styles.input} />
        </div>
        <div className={styles.contents}>
          <label htmlFor="grade">학년</label>
          <select name="grade" ref={gradeRef} className={styles.input}>
            <option value="none">선택</option>
            <option value="초1">초1</option>
            <option value="초2">초2</option>
            <option value="초3">초3</option>
            <option value="초4">초4</option>
            <option value="초5">초5</option>
            <option value="초6">초6</option>
            <option value="중1">중1</option>
            <option value="중2">중2</option>
            <option value="중3">중3</option>
          </select>
        </div>
        <div className={styles.contents}>
          <label htmlFor="address">주소 </label>
          <input
            ref={addressRef}
            name="address"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.contents}>
          <label htmlFor="date">등록일</label>
          <input ref={dateRef} name="date" type="date" className={styles.input} />
        </div>
        <div className={styles.contents}>
          <label htmlFor="hp">전화번호</label>
          <input
            ref={hpRef}
            name="hp"
            className={styles.input}
            type="text"
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onClick}>
            저장
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={(event) => {
              event.preventDefault();
              setModalIsOpen(false);
            }}
          >
            취소
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentEditForm;
