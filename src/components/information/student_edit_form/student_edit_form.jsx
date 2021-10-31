import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./student_edit_form.module.css";

const StudentEditForm = ({ student, modalIsOpen, closeModal, createOrUpdateStudent }) => {
  const [name, setName] = useState(student.name);
  const [grade, setGrade] = useState(student.grade);
  const [address, setAddress] = useState(student.address);
  const [phone, setPhone] = useState(student.phone);
  const [startDate, setStartDate] = useState(student.startDate);
  const [endDate, setEndDate] = useState(student.endDate); 
  const onChange = (event, setFn) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    if (event.currentTarget.name === "phone") {
      event.currentTarget.value = autoHypenPhone(event.currentTarget.value);
    }
    setFn(event.currentTarget.value);  };

  const onClick = event => {
    event.preventDefault();
    const regex = /^\d{3}-\d{3,4}-\d{4}$/;
    if (name == null || name.length === 0){
      alert('이름을 입력하세용');
      return;
    }
    if (grade == null || grade.length === 0 ){
      alert('학년을 선택하세용');
      return;
    }
    if (phone != null && phone.length !== 0 && phone.match(regex) == null){
      alert('전화번호 형식이 올바르지 않습니당');
      return;
    }
    createOrUpdateStudent({...student, name, grade, address, phone, startDate,endDate});
    closeModal();
  };

  const onCancel = event =>{
    event.preventDefault();
    closeModal();
  }

  useEffect(() => {
    phone && setPhone(autoHypenPhone(phone));
  }, [phone]);

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
          <input defaultValue={name} name="name" id="name" type="text" className={styles.input} onChange={(event) => onChange(event, setName)} />
        </div>
        <div className={styles.contents}>
          <label htmlFor="grade">학년</label>
          <select defaultValue={grade} name="grade" id="grade" className={styles.input} onChange={(event) => onChange(event, setGrade)}>
            <option value="">선택</option>
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
          <input defaultValue={address} name="address" id="address" type="text" className={styles.input} onChange={(event) => onChange(event, setAddress)}/>
        </div>
        <div className={styles.contents}>
          <label htmlFor="phone">전화번호</label>
          <input defaultValue={phone} name="phone" id="phone" className={styles.input} type="text" onChange={(event) => onChange(event, setPhone)}/>
        </div>
        <div className={styles.contents}>
          <label htmlFor="startDate">등록일</label>
          <input defaultValue={startDate} name="startDate" id="startDate" type="date" className={styles.input} onChange={(event) => onChange(event, setStartDate)}/>
        </div>
        <div className={styles.contents}>
          <label htmlFor="endDate">퇴원일</label>
          <input defaultValue={endDate} name="endDate" id="endDate" type="date" className={styles.input} onChange={(event) => onChange(event, setEndDate)}/>
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

export default StudentEditForm;

function autoHypenPhone(str) {
  str = str.replace(/[^0-9]/g, "");
  var tmp = "";
  if (str.length < 4) {
    return str;
  } else if (str.length < 7) {
    tmp += str.substr(0, 3);
    tmp += "-";
    tmp += str.substr(3);
    return tmp;
  } else if (str.length < 11) {
    tmp += str.substr(0, 3);
    tmp += "-";
    tmp += str.substr(3, 3);
    tmp += "-";
    tmp += str.substr(6);
    return tmp;
  } else {
    tmp += str.substr(0, 3);
    tmp += "-";
    tmp += str.substr(3, 4);
    tmp += "-";
    tmp += str.substr(7, 4);
    return tmp;
  }
}