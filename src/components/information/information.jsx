import React, { useState } from "react";
import styles from "./information.module.css";
import Books from "./Books/Books";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Courses from "./Courses/Courses";
import Consulting from "./Consulting/Consulting";
import StudentEditForm from "./StudentEditForm/StudentEditForm";
import Memos from "./Memos/Memos";
import useConfirm from "../../common/useConfirm";

const Information = ({
  student,
  createOrUpdateStudent,
  removeStudent,
  createOrUpdateInformation,
  removeInformation,
  booksRepository
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
        <Tabs className={styles.tabs} selectedTabPanelClassName={styles.selectedPanel}>
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
              booksRepository={booksRepository}
            />
          </TabPanel>
          <TabPanel>
            <Consulting
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
