import React from "react";
import styles from "./book.module.css";
import { AiFillDelete } from "react-icons/ai";
import useConfirm from "../../../../common/use_confirme";

const Book = ({
  student,
  book,
  removeInformation,
  createOrUpdateInformation,
}) => {
  const { payment, title, completion } = book;
  const changeBookStatus = (event, clicked) => {
    event.preventDefault();
    createOrUpdateInformation(
      student,
      { ...book, [clicked]: !book[clicked] },
      "book"
    );
  };

  const onRemove = useConfirm("삭제하시겠습니까?", () =>
    removeInformation(student, book, "book")
  );

  return (
    <li className={styles.book}>
      <div className={styles.status}>
        <button
          className={`${getPaymentStyles(payment)}`}
          onClick={(event) => changeBookStatus(event, "payment")}
        >
        <div className={styles.statusText}>
          {payment ? "결제완료✔" : "미결제"}</div>
        </button>
        <button
          className={`${getCompletionStyles(completion)}`}
          onClick={(event) => changeBookStatus(event, "completion")}
        >
          <div className={styles.statusText}>
          {completion ? "진행완료✔" : "진행중"}</div>
        </button>
      </div>
      <div className={styles.title}>{title}</div>
      <button className={styles.delete} onClick={onRemove}>
        <AiFillDelete />
      </button>
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
