import React from "react";
import styles from "./books.module.css";
import Book from "./Book/Book";
import BookAddForm from "./BookAddForm/BookAddForm";

const Books = ({
  student,
  userName,
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
              userName={userName}
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
