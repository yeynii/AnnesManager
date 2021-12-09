import React, { useState } from "react";
import styles from "./students.module.css";
import StudentAddForm from "./StudentAddForm/StudentAddForm";
import Student from "./Student/Student";
import SearchBar from "../SearchBar/SearchBar";
import { HiMenu } from "react-icons/hi";

const Students = ({
  createOrUpdateStudent,
  students,
  openInformation,
  selectedId,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [isDrawerOn, setIsDrawerOn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOn(!isDrawerOn);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getSearchedStudents = (word) => {
    setKeyword(word);
  };

  const onChange = e => {
    setIsChecked(!isChecked);
  };


  return (
    <>
      <div
        className={`${styles.drawer} ${getDrawerstyle(isDrawerOn)}`}
        onClick={handleDrawer}
      >
        <HiMenu />
      </div>
      <section className={`${styles.students} ${getStudentsstyle(isDrawerOn)}`}>
        <div className={styles.header}>
          <h1 className={styles.title}>학생 목록</h1>
          <SearchBar getSearchedStudents={getSearchedStudents} />
          <div className={styles.check}>
            <input
              id="leaveStudents"
              type="checkbox"
              className={styles.checkbox}
              onChange={onChange}
            />
            <label htmlFor="leaveStudents" className={styles.checkLabel}>
              퇴원 학생
            </label>
          </div>
        </div>
        <ul className={styles.studentList}>
          {students &&
            Object.keys(students)
              .filter((key) => students[key].name.includes(keyword))
              .filter((key) => isChecked ? students[key].endDate.length != 0 : students[key].endDate.length == 0 )
              .sort((a, b) => (students[a].name > students[b].name ? 1 : -1))
              .map((key) => (
                <Student
                  key={key}
                  student={students[key]}
                  openInformation={openInformation}
                  selectedId={selectedId}
                />
              ))}
        </ul>
        <button
          className={styles.addStudents}
          onClick={() => setIsModalOpen(true)}
        >
          +
        </button>
        <StudentAddForm
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          createOrUpdateStudent={createOrUpdateStudent}
        />
      </section>
    </>
  );
};

function getDrawerstyle(isDrawerOn) {
  if (isDrawerOn === true) {
    return styles.onDrawer;
  } else return styles.offDrawer;
}
function getStudentsstyle(isDrawerOn) {
  if (isDrawerOn === true) {
    return styles.studentsOn;
  } else return styles.studentsOff;
}

export default Students;
