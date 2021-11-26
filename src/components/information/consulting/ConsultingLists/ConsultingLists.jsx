import React from "react";
import styles from "./consultingLists.module.css";
import ConsultingList from "./ConsultingList/ConsultingList";
import ConsultingAddForm from "./ConsultingAddForm/ConsultingAddForm";

const ConsultingLists = ({ student, createOrUpdateInformation, removeInformation }) => {
  return (
    <ul className={styles.consultingLists}>
      <ConsultingAddForm student={student} createOrUpdateInformation={createOrUpdateInformation} />
      {student.consultings &&
        Object.keys(student.consultings).reverse().map((key) => (
          <ConsultingList
            student={student}
            key={key}
            consulting={student.consultings[key]}
            removeInformation={removeInformation}
            createOrUpdateInformation={createOrUpdateInformation}
          />
        ))}
    </ul>
  );
};

export default ConsultingLists;
