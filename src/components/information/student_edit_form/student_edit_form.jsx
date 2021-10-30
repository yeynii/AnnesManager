import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./student_edit_form.module.css";

const StudentEditForm = ({ student, modalIsOpen, closeModal, createOrUpdateStudent }) => {
  const [name, setName] = useState(student.name);
  const [grade, setGrade] = useState(student.grade);
  const [address, setAddress] = useState(student.address);
  const [date, setDate] = useState(student.date);
  const [hp, setHp] = useState(student.hp);

  const onChange = (event, setFn) => {
    event.preventDefault();
    setFn(event.currentTarget.value);
  }
  const onClick = event => {
    event.preventDefault();
    createOrUpdateStudent({ ...student, name, grade, address, date, hp });
    closeModal();
  };
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
          <input defaultValue={name} name="name" type="text" className={styles.input} onChange={(event) => onChange(event, setName)} />
        </div>
        <div className={styles.contents}>
          <label htmlFor="grade">학년</label>
          <select name="grade" defaultValue={grade} className={styles.input} onChange={(event) => onChange(event, setGrade)}>
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
            defaultValue={address}
            name="address"
            type="text"
            className={styles.input}
            onChange={(event) => onChange(event, setAddress)}
          />
        </div>
        <div className={styles.contents}>
          <label htmlFor="date">등록일</label>
          <input defaultValue={date} name="date" type="date" className={styles.input} onChange={(event) => onChange(event, setDate)} />
        </div>
        <div className={styles.contents}>
          <label htmlFor="hp">전화번호</label>
          <input
            defaultValue={hp}
            name="hp"
            className={styles.input}
            type="text"
            onChange={(event) => onChange(event, setHp)}
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onClick}>
            저장
          </button>
          <button className={`${styles.button} ${styles.grey}`} onClick={closeModal}>
            취소
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentEditForm;
