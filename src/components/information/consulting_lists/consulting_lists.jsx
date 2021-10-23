import React from 'react';
import styles from './consulting_lists.module.css';
import ConsultingList from './consulting_list/consulting_list';
const ConsultingLists = ({student, onCreateConsulting, onDeleteConsulting}) => {
  return (
    <ul className={styles.consultingList}>
      {student.consulting &&
        Object.keys(student.consulting).map((key) => (
          <ConsultingList
            student={student}
            key={key}
            book={student.consulting[key]}
            onDeleteConsulting={onDeleteConsulting}
          />
        ))}
        <ConsultingList
        />
    </ul>
  );
};

export default ConsultingLists;