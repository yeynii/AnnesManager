import React from "react";
import styles from "./book_list.module.css";
import useConfirm from "../../../common/use_confirme"

const BookList = ({ book, removeBook }) => {
  const { title, price } = book;
  const onRemove = useConfirm("삭제하시겠습니까?", () => removeBook(book));
  return (
    <li className={styles.book}>
      <div className={styles.title}>{title}</div>
      <div className={styles.price}>{price}</div>
      <button className={styles.button} onClick={onRemove}>
        X
      </button>
    </li>
  );
};

export default BookList;
