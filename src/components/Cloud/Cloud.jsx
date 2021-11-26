import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router';
import styles from './cloud.module.css';

const Cloud = ({authService}) => {
    const history = useHistory();
    const historyState = useHistory().state;
    const [userId, setUserId] = useState(historyState && historyState.id);
    const goHome = () => {
      history.push({ pathname: "/home", state: { id: userId } });
    };

    useEffect(() => {
        authService.onAuthChange((user) => {
          if (user) {
            setUserId(user.uid);
          } else {
            history.push("/");
          }
        });
      }, [history, authService]);

    return (
        <>
        <button className={styles.return} onClick={goHome}>돌아가기 💨 💨</button>
        <div className={styles.cloud}>
            <h1>앤즈 문서</h1>
            <div className={styles.docs}>
                <li className={styles.doc}><a href="https://drive.google.com/u/0/uc?id=1VOvcCPLRHAhFx8gALDuNEfIFIyEmMqJE&export=download">수학 평가표</a></li>
                <li className={styles.doc}><a href="">영어 평가표</a></li>
                <li className={styles.doc}><a href="">오답노트</a></li>
                <li className={styles.doc}><a href="">개념노트</a></li>
                <li className={styles.doc}><a href="">수업 진행표</a></li>
                <li className={styles.doc}><a href="">도장판</a></li>
            </div>
        </div>
        </>
    )
}

export default Cloud
