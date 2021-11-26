import React, { useState } from "react";
import styles from "./memo.module.css";
import useConfirm from "../../../../common/useConfirm";

const Memo = ({ student, memo, removeInformation, createOrUpdateInformation }) => {
  const {content} = memo;
  const [updated, setUpdated] = useState(memo);
  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    setUpdated({...updated, content : event.currentTarget.value});
    createOrUpdateInformation(student, updated, 'memo');
  }

  const onRemove = useConfirm("삭제하시겠습니까?", () => removeInformation(student, memo, "memo"));

  return (
    <li className={styles.memo}>
      <button className={styles.delete} onClick={onRemove}>
        X
      </button>
      <textarea
        defaultValue={content}
        name="content"
        className={styles.content}
        onChange={onChange}
      />
    </li>
  );
};

export default Memo;
