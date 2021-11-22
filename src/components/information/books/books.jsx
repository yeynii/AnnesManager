import React from "react";
import styles from "./books.module.css";
import Book from "./book/book";
import BookAddForm from "./book_add_form/book_add_form";

const Books = ({
  student,
  createOrUpdateInformation,
  removeInformation,
  booksRepository,
}) => {
  return (
    <ul className={styles.books}>
      <BookAddForm
        student={student}
        createOrUpdateInformation={createOrUpdateInformation}
        booksRepository={booksRepository}
      />
      {student.books &&
        Object.keys(student.books)
          .reverse()
          .map((key) => (
            <Book
              student={student}
              key={key}
              book={student.books[key]}
              removeInformation={removeInformation}
              createOrUpdateInformation={createOrUpdateInformation}
            />
          ))}
    </ul>
  );
};

export default Books;
