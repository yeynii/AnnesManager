import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./bookManager.module.css";
import BookLists from "./BookLists/BookLists";
import BookStorageAddForm from "./BookStorageAddForm/BookStorageAddForm";

const BooksManager = ({ authService, booksRepository }) => {
  const historyState = useHistory().state;
  const history = useHistory();
  const [books, setBooks] = useState();
  const [userId, setUserId] = useState(historyState && historyState.id);

  const goHome = () => {
    history.push({ pathname: "/home", state: { id: userId } });
  };

  const createOrUpdateBook = (book) => {
    setBooks(() => {
      const updated = { ...books };
      updated[book.id] = book;
      return updated;
    });
    booksRepository.saveBook(book);
  };
  const removeBook = (book) => {
    setBooks(() => {
      const updated = { ...books };
      delete updated[book.id];
      return updated;
    });
    booksRepository.removeBook(book);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [history, authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = booksRepository.syncBooks((books) => setBooks(books));
    return () => stopSync();
  }, [userId, booksRepository]);

  return (
    <div className={styles.container}>
      <div className={styles.bookManager}>
        <h2 className={styles.title}>책 목록</h2>
        <button className={styles.return} onClick={goHome}>
          돌아가기 💨 💨
        </button>
        <BookLists books={books} removeBook={removeBook} />
        <BookStorageAddForm createOrUpdateBook={createOrUpdateBook} />
      </div>
    </div>
  );
};

export default BooksManager;
