import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Modal from "react-modal";
import styles from "./book_add_form.module.css";

const BookAddForm = ({ createOrUpdateInformation, student }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState();

  const onClick = (event) => {
    event.preventDefault();
    createOrUpdateInformation(student, {
      id: Date.now(),
      title,
      payment: false,
      completion: false,
    },'book');
    setModalIsOpen(false);
  };

  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    setTitle(event.currentTarget.value);
  }

  const closeModal = event => {
    event.preventDefault();
    setModalIsOpen(false);
  }

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
            <label htmlFor="title">책 이름</label>
            <input name="title" className={styles.title} onChange={onChange} required>
            </input>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={onClick}>
              저장
            </button>
            <button
              className={`${styles.button} ${styles.grey}`}
              onClick={closeModal}>
              취소
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default BookAddForm;
