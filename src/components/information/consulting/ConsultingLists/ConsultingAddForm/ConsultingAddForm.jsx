import React, { useRef, useEffect } from "react";
import styles from "./consultingAddForm.module.css";
import { BsPlusLg } from "react-icons/bs";

const ConsultingAddForm = ({
  createOrUpdateInformation,
  student,
  userName,
}) => {
  const contentRef = useRef();
  const dateRef = useRef();
  const today = new Date();
  const todayDate =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    event.currentTarget.style.height = "80px";
    event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";
  };

  const onFocus = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";
  };

  const onClick = (event) => {
    event.preventDefault();
    createOrUpdateInformation(
      student,
      {
        id: Date.now(),
        date: dateRef.current.value,
        content: contentRef.current.value,
        teacher: userName,
      },
      "consulting"
    );
    contentRef.current.value = "";
    contentRef.current.style.height = "80px";
    dateRef.current.value = todayDate;
  };

  useEffect(() => {
    contentRef.current.value = "";
    contentRef.current.style.height = "80px";
    dateRef.current.value = todayDate;
  }, [todayDate,student]);

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <input ref={dateRef} type="date" className={styles.dateInput} />
      </div>
      <textarea
        onChange={onChange}
        onFocus={onFocus}
        ref={contentRef}
        className={styles.textarea}
      />
      <div className={styles.plus} onClick={onClick}>
        <BsPlusLg />
      </div>
    </div>
  );
};

export default ConsultingAddForm;
