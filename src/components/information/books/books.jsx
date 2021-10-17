import React from 'react';
import styles from './books.module.css';

const Books = (props) => {
  return(
    <ul className={styles.books}>
      <li className={styles.book}>
        <div className={styles.status}>
          <button className={styles.button}>
            미결제
          </button>
          <button className={styles.button}>
            진행중
          </button>

        </div>
        <div className={styles.name}>뉴런 1-2</div>
        <div className={styles.buttons}>
          <button className={styles.button}>
            수정
          </button>
          <button className={styles.button}>
            삭제
          </button>
        </div>
      </li>
    </ul>
  );
};

export default Books;