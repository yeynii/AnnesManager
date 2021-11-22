import React, { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import Modal from "react-modal";
import styles from "./book_add_form.module.css";
import BooksRepository from "../../../../service/books_repository";

const BookAddForm = ({ createOrUpdateInformation, student, booksRepository }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState([]);

  const onClick = (e) => {
    e.preventDefault();
    if (title == null || title.length === 0) {
      alert("책 제목을 입력하지 않았습니다");
      return;
    }
    createOrUpdateInformation(
      student,
      {
        id: Date.now(),
        title,
        payment: false,
        completion: false,
      },
      "book"
    );
    setTitle();
    setModalIsOpen(false);
  };

  const onChange = (e) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    setTitle(e.currentTarget.value);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setModalIsOpen(false);
  };

  useEffect(() => {
    const stopSync = booksRepository.syncBooks((_books) =>
    setBooks(_books)
    );
    return () => stopSync();
  },[]);

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
            "z-index": "10",
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
            <label htmlFor="title">책 제목</label>
            <input
              list="booklist"
              name="title"
              className={styles.title}
              id="title"
              onChange={onChange}
            />
            <datalist id="booklist">
              {books &&
                Object.keys(books)
                  .filter((key) => title.split(' ').some(t => books[key].title.includes(t)))
                  .sort((a, b) => (books[a].title > books[b].title ? 1 : -1))
                  .map((key) => <option key={key} value={books[key].title} />)}
            </datalist>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={onClick}>
              저장
            </button>
            <button
              className={`${styles.button} ${styles.grey}`}
              onClick={closeModal}
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
