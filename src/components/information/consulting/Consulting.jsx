import React from 'react';
import styles from './consulting.module.css';
import ConsultingLists from './consulting_lists/consulting_lists';
import ConsultingManual from './consultingManual/ConsultingManual';

const Consulting = ({student, createOrUpdateInformation, removeInformation}) => {
    return(
        <div className={styles.consulting}>
            <ConsultingLists
              student={student}
              createOrUpdateInformation={createOrUpdateInformation}
              removeInformation={removeInformation}
            />
            <ConsultingManual />
        </div>
    );
}

export default Consulting;