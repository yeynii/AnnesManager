import React from 'react';
import styles from "./header.module.css";

const Header = ({logOut}) => {
  return(
  <header className={styles.header}>
    <button className={styles.book} onClick={logOut}>
    📚 관리자
    </button>
    <div className={styles.headerText}>Annes Manager</div>
    <button className={styles.logout} onClick={logOut}>
      logout
    </button>
  </header>

  );
}

export default Header;