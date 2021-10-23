import React from "react";
import styles from "./books.module.css";
import Book from './book/book';
import BookAddForm from './book_add_form/book_add_form';

const Books = ({student, onCreateBook, onDeleteBook, onChangeBookStatus}) => {
  return (
    <ul className={styles.books}>
      {student.books &&
        Object.keys(student.books).map((key) => (
          <Book
            student={student}
            key={key}
            book={student.books[key]}
            onDeleteBook={onDeleteBook}
            onChangeBookStatus={onChangeBookStatus}
          />
        ))}
        <BookAddForm student={student} onCreateBook={onCreateBook} />
    </ul>
  );
};

export default Books;
