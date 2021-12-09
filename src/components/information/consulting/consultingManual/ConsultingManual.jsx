import React from "react";
import styles from "./consultingManual.module.css";

const ConsultingManual = (props) => {
  return (
    <div className={styles.manual}>
      <h3 className={styles.title}>💗 상담 매뉴얼 💗</h3>
      <div className={styles.mention}>
        <div className={styles.opening}>
          <h4 className={styles.openingTitle}>시작</h4>
          <li className={styles.mentList}>
            안녕하세요 앤즈학원입니다. OO이 OO 가르치고있는 OO선생님이라고
            합니다.
          </li>
          <li className={styles.mentList}>
            요즘 OO이가 학원에서 어떻게 공부하고 있는지 궁금 해 하실 것 같아
            전화드렸습니다.
          </li>
          <li className={styles.mentList}>지금 전화통화 혹시 괜찮으실까요?</li>
        </div>
        <div className={styles.content}>
          <h4 className={styles.contentTitle}>내용</h4>
          <li className={styles.mentList}>
            요즘 OO이는 혹시 학원다니기 어떻다고 집에서 이야기하는 부분들이
            있나요?
          </li>
          <li className={styles.mentList}>혹시 숙제가 많다거나 공부가 어렵다는 이야기는 안하던가요?</li>
          <li className={styles.mentList}>
            (현재 진도, 교재 설명, 앞으로의 계획)
          </li> 
        </div>
        <div className={styles.closing}>
          <h4 className={styles.closingTitle}>마무리</h4>
          <li className={styles.mentList}>
            곧 평가표가 나갈 예정이니 확인하시고 챙겨 보내주시면
            감사하겠습니다.
          </li>
          <li className={styles.mentList}>혹시 더 궁금하신 점은 없으신가요?</li>
          <li className={styles.mentList}>
            언제든 궁금한 점 생기시면 앤즈스터디메이트 채널로 코멘트 남겨주시면
            저희가 확인해서 연락 드리도록 하겠습니다.
          </li>
          <li className={styles.mentList}>감사합니다.^^*</li>
        </div>
      </div>
    </div>
  );
};

export default ConsultingManual;
