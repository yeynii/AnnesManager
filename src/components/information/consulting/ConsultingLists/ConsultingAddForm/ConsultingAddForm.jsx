import React, { useRef, useEffect } from "react";
import styles from "./consultingAddForm.module.css";
import { BsPlusLg } from "react-icons/bs";

const ConsultingAddForm = ({
  createOrUpdateInformation,
  student,
  userName,
}) => {
  const dateRef = useRef();
  const today = new Date();
  const todayDate =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + today.getDate()).slice(-2);

  const onClick = (event) => {
    event.preventDefault();
    createOrUpdateInformation(
      student,
      {
        id: Date.now(),
        date: dateRef.current.value,
        content: '',
        teacher: userName,
      },
      "consulting"
    );
    dateRef.current.value = todayDate;
  };

  useEffect(() => {
    dateRef.current.value = todayDate;
  }, [todayDate,student]);

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <input ref={dateRef} type="date" className={styles.dateInput} />
      </div>
      <div className={styles.plus} onClick={onClick}>
        상담 추가
      </div>
    </div>
  );
};

export default ConsultingAddForm;
