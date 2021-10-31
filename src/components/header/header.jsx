import React from "react";
import styles from "./header.module.css";
import { useHistory } from "react-router";

const Header = ({ logOut, userId }) => {
  const history = useHistory();
  const goBooks = () => {
    history.push({ pathname: "/books", state: { id: userId } });
  };
  return (
    <header className={styles.header}>
      <button className={styles.book} onClick={goBooks}>
        📚 관리자
      </button>
      <div className={styles.headerText}>Annes Manager</div>
      <button className={styles.logout} onClick={logOut}>
        logout
      </button>
    </header>
  );
};

export default Header;
