import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./student_add_form.module.css";

const StudentAddForm = ({ modalIsOpen, closeModal, createOrUpdateStudent }) => {
  const [student, setStudent] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const onClick = event => {
    event.preventDefault();
    const newStudent = { ...student, id: Date.now() };
    createOrUpdateStudent(newStudent);
    closeModal();
  };
  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    if (event.currentTarget.name === "phone"){
      event.currentTarget.value = autoHypenPhone(event.currentTarget.value);
    }
    setStudent({ ...student, [event.currentTarget.name]: event.currentTarget.value });
  }

  const onCancel = event => {
    event.preventDefault();
    closeModal();
  }

  useEffect(() => {
    phoneNumber && setPhoneNumber(autoHypenPhone(phoneNumber))
  }, [phoneNumber]);


  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "500px",
          height: "300px",
          background: "white",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          padding: "20px",
        },
      }}
    >
      <form className={styles.form}>
        <h3 className={styles.title}>학생 정보 수정</h3>
        <div className={styles.contents}>
          <label htmlFor="name">이름</label>
          <input name="name" id="name" type="text" className={styles.input} onChange={onChange}/>
        </div>
        <div className={styles.contents}>
          <label htmlFor="grade">학년</label>
          <select name="grade" id="grade" className={styles.input} onChange={onChange}>
            <option value="none">선택</option>
            <option value="초1">초1</option>
            <option value="초2">초2</option>
            <option value="초3">초3</option>
            <option value="초4">초4</option>
            <option value="초5">초5</option>
            <option value="초6">초6</option>
            <option value="중1">중1</option>
            <option value="중2">중2</option>
            <option value="중3">중3</option>
          </select>
        </div>
        <div className={styles.contents}>
          <label htmlFor="address">주소 </label>
          <input name="address" id="address" type="text" className={styles.input} onChange={onChange} />
        </div>
        <div className={styles.contents}>
          <label htmlFor="phone">전화번호</label>
          <input name="phone" id="phone" type="text" className={styles.input} placeholder="010-1234-1234" onChange={onChange} />
        </div>
        <div className={styles.contents}>
          <label htmlFor="startDate">등록일</label>
          <input name="startDate" id="startDate" type="date" className={styles.input} onChange={onChange} />
        </div>
        <div className={styles.contents}>
          <label htmlFor="endDate">퇴원일</label>
          <input name="endDate" id="endDate" type="date" className={styles.input} onChange={onChange} />
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onClick}>
            저장
          </button>
          <button className={`${styles.button} ${styles.grey}`} onClick={onCancel}>
            취소
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentAddForm;

function autoHypenPhone(str){
  str = str.replace(/[^0-9]/g, '');
  var tmp = '';
  if( str.length < 4){
      return str;
  }else if(str.length < 7){
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3);
      return tmp;
  }else if(str.length < 11){
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 3);
      tmp += '-';
      tmp += str.substr(6);
      return tmp;
  }else{              
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 4);
      tmp += '-';
      tmp += str.substr(7, 4);
      return tmp;
  }
}