import React from "react";
import styles from "./information.module.css";
import Books from "./books/books";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Courses from "./courses/courses";

const Information = ({
  student,
  onCreateCourse,
  onDeleteStudent,
  onDeleteCourse,
  onCreateBook,
  onDeleteBook,
  onChangeBookStatus,
}) => {
  const onClick = () => {
    onDeleteStudent(student);
  };
  return (
    <section className={styles.profile}>
      <div className={styles.delete} onClick={onClick}>
        삭제
      </div>
      <div className={styles.infoBox}>
        <div className={styles.imgbox}>
          <img
            className={styles.profileimg}
            src="/apple-icon.png"
            alt="profile"
          />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{student && student.name}</div>
          <div className={styles.grade}>{student && student.grade}</div>
          <div className={styles.address}>{student && student.address}</div>
          <div className={styles.date}>{student && student.date}</div>
        </div>
      </div>
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
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </section>
  );
};

export default Information;
