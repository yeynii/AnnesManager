import React from "react";
import styles from "./consulting_lists.module.css";
import ConsultingList from "./consulting_list/consulting_list";
import ConsultingAddForm from "./consulting_add_form/consulting_add_form";
const ConsultingLists = ({ student, createOrUpdateInformation, removeInformation }) => {
  return (
    <ul className={styles.consultingList}>
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
