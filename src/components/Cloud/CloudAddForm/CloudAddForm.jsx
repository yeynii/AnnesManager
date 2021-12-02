import React, { useState } from "react";
import styles from "./cloudAddForm.module.css";
import Modal from "react-modal";

const CloudAddForm = ({ isModalOpen, closeModal, createOrUpdateDoc }) => {
    const [fileName, setFileName] = useState();
    const [fileURL, setFileURL] = useState();
    const onClick = event => {
        event.preventDefault();
        if (fileName == null || fileName.length === 0) {
          alert("파일 이름을 입력하세요");
          return;
        }
        if (fileURL == null || fileURL.length === 0) {
          alert("다운 링크를 입력하세요");
          return;
        }
        createOrUpdateDoc({
          id: Date.now(),
          fileURL, fileName
        });
        setFileName();
        setFileURL();
        closeModal();
    };

    const onCancel = (event) => {
      event.preventDefault();
      closeModal();
    };
  
    const onChange = (event, setFn) => {
        if (event.currentTarget == null) {
          return;
        }
        event.preventDefault();
        setFn(event.currentTarget.value);
      };

  return (
    <Modal
      isOpen={isModalOpen}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "10",
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "white",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          padding: "1em",
          minWidth: "300px",
          height: "250px",
        },
      }}
    >
      <div className={styles.container}>
        <h3 className={styles.title}>문서 추가</h3>
        <div className={styles.addForm}>
          <div className={styles.inputBox}>
            <label htmlFor="fileName" className={styles.label}>파일 이름</label>
            <input
              name="fileName"
              id="fileName"
              type="text"
              className={styles.input}
              onChange={(event) => onChange(event, setFileName)}
            />
          </div>

          <div className={styles.inputBox}>
            <label htmlFor="fileURL" className={styles.label}>다운 링크</label>
            <input
              name="fileURL"
              id="fileURL"
              type="text"
              className={styles.input}
              onChange={(event) => onChange(event, setFileURL)}
            />
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={onClick}>업로드</button>
            <button className={`${styles.button} ${styles.grey}`}
            onClick={onCancel}>취소</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CloudAddForm;
