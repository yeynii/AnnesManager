import React, { useState } from "react";
import styles from "./information.module.css";
import Books from "./books/books";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Courses from "./courses/courses";
import ConsultingLists from "./consulting_lists/consulting_lists";
import StudentEditForm from "./student_edit_form/student_edit_form";
import Memos from "./memos/memos";
import useConfirm from "../use_confirme";

const Information = ({
  student,
  createOrUpdateStudent,
  removeStudent,
  createOrUpdateInformation,
  removeInformation,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { name, grade, address, startDate, endDate, phone } = student;

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onRemove = useConfirm("삭제하시겠습니까?", () => removeStudent(student));

  return (
    <div className={styles.information}>
      <section className={styles.profile}>
        <div className={styles.buttons}>
          <div className={styles.button} onClick={() => setModalIsOpen(true)}>
            수정
          </div>
          <div className={styles.button} onClick={onRemove}>
            삭제
          </div>
        </div>
        <div className={styles.infoBox}>
          <div className={styles.imgbox}>
            <img
              className={styles.profileimg}
              src="/apple-icon.png"
              alt="profile"
            />
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.name}>{name}</div>
            <div className={styles.grade}>{grade}</div>
            <div className={styles.address}>주소 : {address}</div>
            <div className={styles.hp}>전화번호: {phone}</div>
            <div className={styles.date}>등록일 : {startDate}</div>
            <div className={styles.date}>퇴원일 : {endDate}</div>
          </div>
        </div>
      </section>
      <div className={styles.tabs}>
        <Tabs>
          <TabList>
            <Tab>수업</Tab>
            <Tab>책</Tab>
            <Tab>상담</Tab>
            <Tab>메모</Tab>
          </TabList>
          <TabPanel>
            <Courses
              student={student}
              createOrUpdateInformation={createOrUpdateInformation}
              removeInformation={removeInformation}
            />
          </TabPanel>
          <TabPanel>
            <Books
              student={student}
              createOrUpdateInformation={createOrUpdateInformation}
              removeInformation={removeInformation}
            />
          </TabPanel>
          <TabPanel>
            <ConsultingLists
              student={student}
              createOrUpdateInformation={createOrUpdateInformation}
              removeInformation={removeInformation}
            />
          </TabPanel>
          <TabPanel>
            <Memos
              student={student}
              createOrUpdateInformation={createOrUpdateInformation}
              removeInformation={removeInformation}
            />
          </TabPanel>
        </Tabs>
      </div>
      {modalIsOpen && (
        <StudentEditForm
          student={student}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          createOrUpdateStudent={createOrUpdateStudent}
        />
      )}
    </div>
  );
};

export default Information;
