import React, { useRef, useEffect } from "react";
import styles from "./consulting_add_form.module.css";
import { BsPlusLg } from "react-icons/bs";

const ConsultingAddForm = ({ onCreateConsulting, student }) => {
  const contentRef = useRef();
  const dateRef = useRef();
  const today = new Date();
  const todayDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const onClick = (event) => {
    event.preventDefault();
    onCreateConsulting(student, {
      id: Date.now(),
      date: dateRef.current.value || "",
      content: contentRef.current.value || "",
    });
    contentRef.current.value='';
    dateRef.current.value = todayDate || '';
  };

  useEffect(() => {
    dateRef.current.value = todayDate || '';
  },[]);

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <input ref={dateRef} type="date" className={styles.dateInput} />
      </div>
      <textarea ref={contentRef} className={styles.textarea} />{" "}
      <div className={styles.plus} onClick={onClick}>
        <BsPlusLg />
      </div>
    </div>
  );
};

export default ConsultingAddForm;
