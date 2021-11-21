import React from "react";
import styles from "./consulting_list.module.css";
import { BiX } from "react-icons/bi";
import useConfirm from "../../../../common/use_confirme";

const ConsultingList = ({ student, consulting, removeInformation, createOrUpdateInformation }) => {
  const { date, content } = consulting;
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    createOrUpdateInformation(student, { ...consulting, [event.currentTarget.name]: event.currentTarget.value }, 'consulting');
  };

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
        defaultValue={content}
        name="content"
        className={styles.textarea}
        onChange={onChange}
      />
    </li>
  );
};

export default ConsultingList;