import React from 'react';
import styles from './consulting.module.css';
import ConsultingLists from './ConsultingLists/ConsultingLists';
import ConsultingManual from './ConsultingManual/ConsultingManual';

const Consulting = ({student, userName, createOrUpdateInformation, removeInformation}) => {
    return(
        <div className={styles.consulting}>
            <ConsultingLists
              student={student}
              userName={userName}
              createOrUpdateInformation={createOrUpdateInformation}
              removeInformation={removeInformation}
            />
            <ConsultingManual 
            student={student}
            userName={userName}/>
        </div>
    );
}

export default Consulting;