import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./studentEditForm.module.css";

const StudentEditForm = ({
  student,
  modalIsOpen,
  closeModal,
  createOrUpdateStudent,
}) => {
  const [name, setName] = useState(student.name);
  const [grade, setGrade] = useState(student.grade);
  const [address, setAddress] = useState(student.address);
  const [phone, setPhone] = useState(student.phone);
  const [startDate, setStartDate] = useState(student.startDate);
  const [endDate, setEndDate] = useState(student.endDate);
  const [sex, setSex] = useState(student.sex);

  const onChange = (event, setFn) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    if (event.currentTarget.name === "phone") {
      event.currentTarget.value = autoHypenPhone(event.currentTarget.value);
    }
    setFn(event.currentTarget.value);
  };

  const onClick = (event) => {
    event.preventDefault();
    const regex = /^\d{3}-\d{3,4}-\d{4}$/;
    if (name == null || name.length === 0) {
      alert("이름을 입력하세요");
      return;
    }
    if (grade == null || grade.length === 0) {
      alert("학년을 선택하세요");
      return;
    }
    if (sex == null || sex.length === 0) {
      alert("성별을 선택하세요");
      return;
    }
    if (phone != null && phone.length !== 0 && phone.match(regex) == null) {
      alert("전화번호 형식이 올바르지 않습니다");
      return;
    }
    createOrUpdateStudent({
      ...student,
      name,
      grade,
      sex,
      address,
      phone,
      startDate,
      endDate,
    });
    closeModal();
  };

  const onCancel = (event) => {
    event.preventDefault();
    closeModal();
  };

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
          height: "300px",
        },
      }}
    >
      <form className={styles.form}>
        <h3 className={styles.title}>학생 정보 수정</h3>
        <div className={styles.contents}>
          <label htmlFor="name" className={styles.label}>
            이름
          </label>
          <input
            defaultValue={name}
            name="name"
            id="name"
            type="text"
            className={styles.input}
            onChange={(event) => onChange(event, setName)}
          />
        </div>
        <div className={styles.contents}>
          <label htmlFor="grade" className={styles.label}>
            학년
          </label>
          <select
            defaultValue={grade}
            name="grade"
            id="grade"
            className={styles.input}
            onChange={(event) => onChange(event, setGrade)}
          >
            <option value="">선택</option>
            <option value="0">7세</option>
            <option value="1">초1</option>
            <option value="2">초2</option>
            <option value="3">초3</option>
            <option value="4">초4</option>
            <option value="5">초5</option>
            <option value="6">초6</option>
            <option value="7">중1</option>
            <option value="8">중2</option>
            <option value="9">중3</option>
            <option value="10">고등</option>
          </select>
        </div>
        <div className={styles.contents}>
          <label className={styles.label}>성별</label>
          <div className={styles.radios}>
            <input
              checked={sex === "f" ? true : false}
              name="sex"
              type="radio"
              value="f"
              onChange={(event) => onChange(event, setSex)}
            />
            여
            <input
              checked={sex === "m" ? true : false}
              name="sex"
              type="radio"
              value="m"
              onChange={(event) => onChange(event, setSex)}
            />
            남
          </div>
        </div>
        <div className={styles.contents}>
          <label htmlFor="address" className={styles.label}>
            학교
          </label>
          <input
            defaultValue={address}
            name="address"
            id="address"
            type="text"
            className={styles.input}
            onChange={(event) => onChange(event, setAddress)}
          />
        </div>
        <div className={styles.contents}>
          <label htmlFor="phone" className={styles.label}>
            전화번호
          </label>
          <input
            defaultValue={phone}
            name="phone"
            id="phone"
            className={styles.input}
            type="text"
            onChange={(event) => onChange(event, setPhone)}
          />
        </div>
        <div className={styles.contents}>
          <label htmlFor="startDate" className={styles.label}>
            등록일
          </label>
          <input
            defaultValue={startDate}
            name="startDate"
            id="startDate"
            type="date"
            className={styles.input}
            onChange={(event) => onChange(event, setStartDate)}
          />
        </div>
        <div className={styles.contents}>
          <label htmlFor="endDate" className={styles.label}>
            퇴원일
          </label>
          <input
            defaultValue={endDate}
            name="endDate"
            id="endDate"
            type="date"
            className={styles.input}
            onChange={(event) => onChange(event, setEndDate)}
          />
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onClick}>
            저장
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={onCancel}
          >
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
