import React from "react";
import styles from "./docList.module.css";
import useConfirm from "../../../common/useConfirm";
const DocList = ({ doc, removeDoc }) => {
  const { fileName, fileURL } = doc;
  const onRemove = useConfirm("삭제하시겠습니까?", () => removeDoc(doc));
  return (
    <li className={styles.doc}>
      <div className={styles.docBox}>
        <a className={styles.link} href={fileURL}> {fileName}</a>
        <button className={styles.button} onClick={onRemove}>X</button>
      </div>
    </li>
  );
};

export default DocList;
