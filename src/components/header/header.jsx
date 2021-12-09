import React from "react";
import styles from "./header.module.css";
import { useHistory } from "react-router";

const Header = ({ logOut, userId, userName }) => {
  const history = useHistory();
  const goBooks = () => {
    history.push({ pathname: "/books", state: { id: userId } });
  };
  const goCloud = () => {
    history.push({ pathname: "/cloud", state: { id: userId } });
  };
  const goOwner = () => {
    history.push({ pathname: "/owner",state: { id: userId } });
  };
  return (
    <header className={styles.header}>
      <div className={styles.buttons}>
        <button className={styles.book} onClick={goBooks}>
          책 관리자
        </button>
        <button className={styles.cloud} onClick={goCloud}>
          앤즈 클라우드
        </button>
      </div>
      <div className={styles.headerText}>Annes Manager</div>
      <div className={styles.userTools}>
      <button className={styles.owner} onClick={goOwner}>
        관리자 메뉴
      </button>
        <div className={styles.userName}>{userName? userName : 'anonymous'}</div>
        <button className={styles.logout} onClick={logOut}>
          logout
        </button>
      </div>
    </header>
  );
};

export default Header;
