import React, { useRef, useState } from "react";
import Modal from "react-modal";
import styles from "./add_modal.module.css";

const AddModal = ({ modalIsOpen, setModalIsOpen, onAdd }) => {
  const nameRef = useRef();
  const gradeRef = useRef();
  const addressRef = useRef();
  const dateRef = useRef();

  const [checkedSubjects, setCheckedSubjects] = useState(new Set());

  const checkedSubjectsHandler = (id, isChecked) => {
    if (isChecked) {
      checkedSubjects.add(id);
      setCheckedSubjects(checkedSubjects);
    } else if (!isChecked && checkedSubjects.has(id)) {
      checkedSubjects.delete(id);
      setCheckedSubjects(checkedSubjects);
    }
    console.log(checkedSubjects);
  };

  const checkHandler = ({target}) => {
    checkedSubjectsHandler(target.value, target.checked);
  };

  const onClick = event => {
    event.preventDefault();
    const newStudent = {
      id: Date.now(),
      name: nameRef.current.value || '',
      grade: gradeRef.current.value || '',
      address: addressRef.current.value || '',
      date: dateRef.current.value || '',
      subjects: checkedSubjects
    };
    onAdd(newStudent);
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
          height: "300px",
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
          <label htmlFor="date">입원일 </label>
          <input ref={dateRef} id="date" type="date" className={styles.input} />
        </div>
        <div className={styles.contents}>
          <div className={styles.subject}>과목</div>
          <div className={styles.subjects}>
            <label>
              국어
              <input
                type="checkbox"
                value="korean"
                onChange={event => checkHandler(event)}
                className={styles.input}/>
            </label>
            <label>
              영어
              <input
                type="checkbox"
                value="english"
                onChange={event => checkHandler(event)}
                className={styles.input}/>
            </label>
            <label>
              수학
              <input
                type="checkbox"
                value="math"
                onChange={event => checkHandler(event)}
                className={styles.input}/>
            </label>
            <label>
              역사
              <input
                type="checkbox"
                value="history"
                onChange={event => checkHandler(event)}
                className={styles.input}/>
            </label>
            <label>
              독서
              <input
                type="checkbox"
                value="book"
                onChange={event => checkHandler(event)}
                className={styles.input}/>
            </label>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onClick}>
            저장
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={() => setModalIsOpen(false)}
          >
            취소
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddModal;
