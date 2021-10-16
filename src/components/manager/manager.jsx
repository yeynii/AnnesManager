import React from 'react';
import styles from './manager.module.css';

const Manager = ({authService}) => {
  return(
    <section className={styles.manager}>
      <header className={styles.header}>Annes Manager</header>
      <div className={styles.container}></div>
      <footer className={styles.footer}>dd</footer>
    </section>
  );
}

export default Manager;