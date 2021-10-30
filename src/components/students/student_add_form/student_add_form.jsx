import React, { useRef, useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./student_add_form.module.css";

const StudentAddForm = ({ modalIsOpen, setModalIsOpen, createOrUpdateStudent }) => {
  const nameRef = useRef();
  const gradeRef = useRef();
  const addressRef = useRef();
  const dateRef = useRef();
  const [hp, setHp] = useState();

  const onClick = event => {
    event.preventDefault();
    const newStudent = {
      id: Date.now(),
      name: nameRef.current.value || '',
      grade: gradeRef.current.value || '',
      address: addressRef.current.value || '',
      date: dateRef.current.value || '',
      hp: hp || ''
    };
    createOrUpdateStudent(newStudent);
    setModalIsOpen(false);
    setHp();
  };

  const handleChange = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setHp(e.target.value);
    }
  }

  useEffect(() => {
    var hpLen = hp && hp.length;
    if ( hpLen === 10 ) {
      setHp(hp.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if ( hpLen === 13) {
      setHp(hp.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [hp]);

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
        <h3 className={styles.title}>학생 정보 입력</h3>
        <div className={styles.contents}>
          <label htmlFor="name">
            이름
          </label>
          <input ref={nameRef} id="name" type="text" className={styles.input} />
        </div>
        <div className={styles.contents}>
          <label htmlFor="grade">학년</label>
          <select ref={gradeRef} className={styles.input}>
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
            id="address"
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.contents}>
          <label htmlFor="date">등록일</label>
          <input ref={dateRef} id="date" type="date" className={styles.input} />
        </div>
        <div className={styles.contents}>
          <label htmlFor="hp">전화번호</label>
          <input value={hp} id="hp" className={styles.input} type='text' onChange={handleChange}/>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onClick} >
            저장
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={event => {event.preventDefault(); setModalIsOpen(false);}}
          >
            취소
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentAddForm;
