import React, { useState, useEffect } from "react";
import styles from "./memo.module.css";
import useConfirm from "../../../../common/useConfirm";

const Memo = ({
  student,
  userName,
  memo,
  removeInformation,
  createOrUpdateInformation,
}) => {
  const { content, name, date } = memo;
  const [updated, setUpdated] = useState(memo);
  const [updatedDate, setUpdatedDate] = useState();
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    setUpdated({
      ...updated,
      content: event.currentTarget.value,
      name: userName,
      date: Date.now(),
    });
    createOrUpdateInformation(student, updated, "memo");
  };

  const onRemove = useConfirm("삭제하시겠습니까?", () => {
    if (userName !== name) {
      if (userName !== "Anne") {
        window.alert("권한이 없습니다.");
        return;
      }
    }
    removeInformation(student, memo, "memo");
  });

  useEffect(() => {
    const _date = new Date(date);
    setUpdatedDate(
      `${_date.getFullYear()}/${_date.getMonth() + 1}/${_date.getDate()}`
    );
  }, [date]);

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
        readOnly={userName !== name && userName !== "Anne" ? true : false}
      />
      <div className={styles.info}>
        <div className={styles.name}>작성자 : {name ? name : "anonymous"}</div>
        <div className={styles.date}>
          업데이트 된 날짜 : {updatedDate ? updatedDate : "날짜미상"}
        </div>
      </div>
    </li>
  );
};

export default Memo;
