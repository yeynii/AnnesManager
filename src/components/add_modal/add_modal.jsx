import React, {useState} from "react";
import Modal from "react-modal";
import styles from './add_modal.module.css';

const AddModal = ({ modalIsOpen, setModalIsOpen }) => {
  const inputRef = useState();
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          position: "absolute",
          top: "30%",
          left: "20%",
          right: "20%",
          bottom: "30%",
          background: "white",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          padding: "20px",
        },
      }}
    >
      <form ref={inputRef} className={styles.form}>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Name"
        />
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Company"
        />
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Title"
        />
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder="Email"
        />
        <textarea
          ref={inputRef}
          className={styles.textarea}
          placeholder="Message"
        />
        <div className={styles.fileInput}>
        </div>
        <div className={styles.fileInput}>
        </div>
      </form>
    </Modal>
  );
};

export default AddModal;
