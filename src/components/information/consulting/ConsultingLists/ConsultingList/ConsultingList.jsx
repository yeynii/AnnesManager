import React, { useRef } from "react";
import styles from "./consultingList.module.css";
import { BiX } from "react-icons/bi";
import useConfirm from "../../../../../common/useConfirm";

const ConsultingList = ({
  student,
  userName,
  consulting,
  removeInformation,
  createOrUpdateInformation,
}) => {
  const { date, content, teacher } = consulting;
  const textareaRef = useRef();
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    if (event.currentTarget.name === "content"){
    event.currentTarget.style.height = "80px";
    event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";
    }
    createOrUpdateInformation(
      student,
      { ...consulting, [event.currentTarget.name]: event.currentTarget.value },
      "consulting"
    );
  };
  const onFocus = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";
  };
  const onBlur = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.currentTarget.style.height = "80px";
  };
  const onRemove = useConfirm("삭제하시겠습니까?", () => {
    if (userName !== teacher) {
      if (userName !== "Anne") {
        window.alert("권한이 없습니다.");
        return;
      }
    }
    removeInformation(student, consulting, "consulting");
  });

  return (
    <li className={styles.note}>
      <div className={styles.info}>
        <input
          defaultValue={date}
          name="date"
          type="date"
          className={styles.dateInput}
          onChange={onChange}
        />
        <span className={styles.teacher}>
          {teacher ? teacher : "anonymous"}
        </span>
        <button className={styles.delete} onClick={onRemove}>
          <BiX />
        </button>
      </div>
      <textarea
        ref={textareaRef}
        defaultValue={content}
        name="content"
        className={styles.textarea}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={(userName !== teacher && userName !== "Anne") ? true : false}
      />
    </li>
  );
};

export default ConsultingList;
