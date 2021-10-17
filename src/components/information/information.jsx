import React from "react";
import styles from "./information.module.css";
import Books from './../books/books';

const Information = ({ student }) => {
  return (
    <section className={styles.profile}>
      <div className={styles.infoBox}>
        <img
          className={styles.profileimg}
          src="/apple-icon.png"
          alt="profile"
        />
        <div className={styles.info}>
          <div className={styles.name}>{student && student.name}</div>
          <div className={styles.grade}>{student && student.grade}</div>
          <div className={styles.subject}>
            {student && student.subjects.map((subject) => `${subject} `)}
          </div>
          <div className={styles.address}>{student && student.address}</div>
          <div className={styles.date}>{student && student.date}</div>
        </div>
      </div>
      <Books/>
    </section>
  );
};

export default Information;
