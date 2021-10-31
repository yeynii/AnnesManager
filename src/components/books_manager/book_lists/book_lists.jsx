import React from "react";
import BookList from "../book_list/book_list";
import styles from "./book_lists.module.css";

const BookLists = ({ books, removeBook }) => {
  return (
    <ul className={styles.books}>
      <div className={styles.fields}>
        <div className={styles.title}>제목</div>
        <div className={styles.price}>가격</div>
      </div>
      <div className={styles.bookLists}>
      {books &&
        Object.keys(books).map((key) => (
          <BookList key={key} book={books[key]} removeBook={removeBook}/>
        ))}</div>
    </ul>
  );
};

export default BookLists;
