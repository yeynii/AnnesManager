import React, { useState, useRef } from "react";
import { BsPlusLg } from "react-icons/bs";
import Modal from "react-modal";
import styles from "./book_add_form.module.css";

const BookAddForm = ({ onCreateBook, student }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const titleRef = useRef();

  const onClick = (event) => {
    event.preventDefault();
    onCreateBook(student, {
      id: Date.now(),
      title: titleRef.current.value || '',
      payment: false,
      completion: false,
    });
    setModalIsOpen(false);
  };

  return (
    <>
      <li className={styles.book} onClick={() => setModalIsOpen(true)}>
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
            <label htmlFor="subject">책 이름</label>
            <input ref={titleRef} className={styles.title}>
            </input>
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
    </>
  );
};

export default BookAddForm;
