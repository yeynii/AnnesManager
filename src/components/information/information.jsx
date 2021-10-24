import React from "react";
import styles from "./information.module.css";
import Books from "./books/books";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Courses from "./courses/courses";
import ConsultingLists from "./consulting_lists/consulting_lists";

const Information = ({
  student,
  onCreateCourse,
  onDeleteStudent,
  onDeleteCourse,
  onCreateBook,
  onDeleteBook,
  onChangeBookStatus,
  onCreateConsulting,
  onDeleteConsulting,
  onUpdateConsulting,
}) => {
  const { name, grade, address, date, hp } = student;
  return (
    <div className={styles.information}>
      <section className={styles.profile}>
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
            <div className={styles.hp}>전화번호: {hp}</div>
            <div className={styles.date}>등록일 : {date}</div>
            <div className={styles.date}>퇴원일 : {date}</div>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.button}>수정</div>
          <div
            className={styles.button}
            onClick={() => onDeleteStudent(student)}
          >
            삭제
          </div>
        </div>
      </section>
      <div className={styles.tabs}>
        <Tabs forceRenderTabPanel ={styles.myselected}>
          <TabList>
            <Tab>수업</Tab>
            <Tab>책</Tab>
            <Tab>상담</Tab>
            <Tab>메모</Tab>
          </TabList>
          <TabPanel>
            <Courses
              student={student}
              onCreateCourse={onCreateCourse}
              onDeleteCourse={onDeleteCourse}
            />
          </TabPanel>
          <TabPanel>
            <Books
              student={student}
              onCreateBook={onCreateBook}
              onDeleteBook={onDeleteBook}
              onChangeBookStatus={onChangeBookStatus}
            />
          </TabPanel>
          <TabPanel>
            <ConsultingLists
              student={student}
              onCreateConsulting={onCreateConsulting}
              onDeleteConsulting={onDeleteConsulting}
              onUpdateConsulting={onUpdateConsulting}
            />
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Information;
