import React from "react";
import styles from "./consultingManual.module.css";

const ConsultingManual = ({student, userName}) => {
  const {name} =student;

  return (
    <div className={styles.manual}>
      <h3 className={styles.title}>๐ ์๋ด ๋งค๋ด์ผ ๐</h3>
      <div className={styles.mention}>
        <div className={styles.opening}>
          <h4 className={styles.openingTitle}>์์</h4>
          <li className={styles.mentList}>
            ์๋ํ์ธ์ ์ค์ฆํ์์๋๋ค. {name.slice(1,3)}(์ด) (๊ณผ๋ชฉ) ๊ฐ๋ฅด์น๊ณ ์๋ {userName}์ ์๋์ด๋ผ๊ณ 
            ํฉ๋๋ค.
          </li>
          <li className={styles.mentList}>
            ์์ฆ {name.slice(1,3)}(์ด)๊ฐ ํ์์์ ์ด๋ป๊ฒ ๊ณต๋ถํ๊ณ  ์๋์ง ๊ถ๊ธ ํด ํ์ค ๊ฒ ๊ฐ์
            ์ ํ๋๋ ธ์ต๋๋ค.
          </li>
          <li className={styles.mentList}>์ง๊ธ ์ ํํตํ ํน์ ๊ด์ฐฎ์ผ์ค๊น์?</li>
        </div>
        <div className={styles.content}>
          <h4 className={styles.contentTitle}>๋ด์ฉ</h4>
          <li className={styles.mentList}>
            ์์ฆ {name.slice(1,3)}(์ด)๋ ํน์ ํ์๋ค๋๊ธฐ ์ด๋ป๋ค๊ณ  ์ง์์ ์ด์ผ๊ธฐํ๋ ๋ถ๋ถ๋ค์ด
            ์๋์?
          </li>
          <li className={styles.mentList}>ํน์ ์์ ๊ฐ ๋ง๋ค๊ฑฐ๋ ๊ณต๋ถ๊ฐ ์ด๋ ต๋ค๋ ์ด์ผ๊ธฐ๋ ์ํ๋๊ฐ์?</li>
          <li className={styles.mentList}>
            (ํ์ฌ ์ง๋, ๊ต์ฌ ์ค๋ช, ์์ผ๋ก์ ๊ณํ)
          </li> 
        </div>
        <div className={styles.closing}>
          <h4 className={styles.closingTitle}>๋ง๋ฌด๋ฆฌ</h4>
          <li className={styles.mentList}>
            ๊ณง ํ๊ฐํ๊ฐ ๋๊ฐ ์์ ์ด๋ ํ์ธํ์๊ณ  ์ฑ๊ฒจ ๋ณด๋ด์ฃผ์๋ฉด
            ๊ฐ์ฌํ๊ฒ ์ต๋๋ค.
          </li>
          <li className={styles.mentList}>ํน์ ๋ ๊ถ๊ธํ์  ์ ์ ์์ผ์ ๊ฐ์?</li>
          <li className={styles.mentList}>
            ์ธ์ ๋  ๊ถ๊ธํ ์  ์๊ธฐ์๋ฉด ์ค์ฆ์คํฐ๋๋ฉ์ดํธ ์ฑ๋๋ก ์ฝ๋ฉํธ ๋จ๊ฒจ์ฃผ์๋ฉด
            ์ ํฌ๊ฐ ํ์ธํด์ ์ฐ๋ฝ ๋๋ฆฌ๋๋ก ํ๊ฒ ์ต๋๋ค.
          </li>
          <li className={styles.mentList}>๊ฐ์ฌํฉ๋๋ค.^^*</li>
        </div>
      </div>
    </div>
  );
};

export default ConsultingManual;
