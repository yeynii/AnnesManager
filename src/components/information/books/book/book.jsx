import React from "react";
import styles from "./book.module.css";

const Book = ({ student, book, onDeleteBook, onChangeBookStatus }) => {
  const { payment, title, completion } = book;
  const onClick = (clicked, event) => {
    event.preventDefault();
    onChangeBookStatus(student, book, clicked);
  };
  return (
    <li className={styles.book}>
      <div className={styles.status}>
        <button
          className={`${styles.button} ${getPaymentStyles(payment)}`}
          onClick={(event) => onClick("payment", event)}
        >
          {payment ? "결제완료✔" : "미결제"}
        </button>
        <button
          className={`${styles.button} ${getCompletionStyles(completion)}`}
          onClick={(event) => onClick("completion", event)}
        >
          {completion ? "진행완료✔" : "진행중"}
        </button>
      </div>
      <div className={styles.name}>{title}</div>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.edit}`}>수정</button>
        <button
          className={`${styles.button} ${styles.delete}`}
          onClick={() => onDeleteBook(student, book)}
        >
          삭제
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
