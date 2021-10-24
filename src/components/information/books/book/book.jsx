import React from "react";
import styles from "./book.module.css";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

const Book = ({ student, book, onDeleteBook, onChangeBookStatus }) => {
  const { payment, title, completion } = book;
  const changeBookStatus = (clicked, event) => {
    event.preventDefault();
    onChangeBookStatus(student, book, clicked);
  };

  const deleteBook = (event) => {
    event.preventDefault();
    onDeleteBook(student, book);
  };

  return (
    <li className={styles.book}>
      <div className={styles.status}>
        <button
          className={`${getPaymentStyles(payment)}`}
          onClick={(event) => changeBookStatus("payment", event)}
        >
          {payment ? "결제완료✔" : "미결제"}
        </button>
        <button
          className={`${getCompletionStyles(completion)}`}
          onClick={(event) => changeBookStatus("completion", event)}
        >
          {completion ? "진행완료✔" : "진행중"}
        </button>
      </div>
      <div className={styles.name}>{title}</div>
      <div className={styles.buttons}>
        <button
          className={styles.delete}
          onClick={(event) => deleteBook(event)}
        >
          <AiFillDelete />
        </button>
      </div>
    </li>
  );
};

function getPaymentStyles(payment) {
  switch (payment) {
    case true:
      return styles.paid;
    case false:
      return styles.unpaid;
    default:
      throw new Error(`unknown theme: ${payment}`);
  }
}

function getCompletionStyles(completion) {
  switch (completion) {
    case true:
      return styles.completed;
    case false:
      return styles.uncompleted;
    default:
      throw new Error(`unknown theme: ${completion}`);
  }
}

export default Book;
