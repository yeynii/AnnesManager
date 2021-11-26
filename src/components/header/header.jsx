import React from "react";
import styles from "./header.module.css";
import { useHistory } from "react-router";

const Header = ({ logOut, userId }) => {
  const history = useHistory();
  const goBooks = () => {
    history.push({ pathname: "/books", state: { id: userId } });
  };
  const goCloud = () => {
    history.push({ pathname: "/cloud", state: { id: userId } });
  };
  return (
    <header className={styles.header}>
      <div className={styles.buttons}>
      <button className={styles.book} onClick={goBooks}>
        책 관리자
      </button>
      <button className={styles.cloud} onClick={goCloud}>
        앤즈 클라우드
      </button></div>
      <div className={styles.headerText}>Annes Manager</div>
      <button className={styles.logout} onClick={logOut}>
        logout
      </button>
    </header>
  );
};

export default Header;
