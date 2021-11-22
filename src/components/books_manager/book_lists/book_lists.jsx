import React from "react";
import BookList from "../book_list/book_list";
import styles from "./book_lists.module.css";

const BookLists = ({ books, removeBook }) => {
  return (
    <div className={styles.container}>
      <div className={styles.columnName}>
      <div className={styles.title}>제목</div>
      <div className={styles.price}>교재비</div></div>
      <ul className={styles.books}>
        <div className={styles.fields}></div>
        <div className={styles.bookLists}>
          {books &&
            Object.keys(books)
              .sort((a, b) => (books[a].title > books[b].title ? 1 : -1))
              .map((key) => (
                <BookList key={key} book={books[key]} removeBook={removeBook} />
              ))}
        </div>
      </ul>
    </div>
  );
};

export default BookLists;
