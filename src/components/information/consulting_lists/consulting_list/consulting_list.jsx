import React, {useRef, useCallback} from "react";
import styles from "./consulting_list.module.css";
import { BiX } from "react-icons/bi";
import useConfirm from "../../../../common/use_confirme";

const ConsultingList = ({ student, consulting, removeInformation, createOrUpdateInformation }) => {
  const { date, content } = consulting;
  const textareaRef = useRef();
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    event.currentTarget.style.height = "80px";
    event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";
    createOrUpdateInformation(student, { ...consulting, [event.currentTarget.name]: event.currentTarget.value }, 'consulting');
  };
  const onFocus = event =>{
    if (event.currentTarget == null) {
      return;
    }
    event.currentTarget.style.height = event.currentTarget.scrollHeight + "px";
  }
  const onBlur = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.currentTarget.style.height = "80px";
  }
  const onRemove = useConfirm("삭제하시겠습니까?", () => removeInformation(student, consulting, "consulting"));

  
  return (
    <li className={styles.note}>
      <div className={styles.date}>
        <input defaultValue={date} name="date" type="date" className={styles.dateInput} onChange={onChange} />
        <button className={styles.delete} onClick={onRemove}>
          <BiX />
        </button>
      </div>
      <textarea
        ref = {textareaRef}
        defaultValue={content}
        name="content"
        className={styles.textarea}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </li>
  );
};

export default ConsultingList;