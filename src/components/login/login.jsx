import React, { useEffect }  from "react";
import styles from "./login.module.css";
import { useHistory } from "react-router";

const Login = ({authService}) => {
  const history = useHistory();
  const onLogin = () => {
    authService.login().then(data => goHome(data.user.uid));
  };
  const goHome = (userId) =>{
    history.push({pathname: '/home', state: {id:userId}});
  }
  
  useEffect(()=>{
    authService.onAuthChange(user => {
      user && goHome(user.id);
    });
  });

  return (
    <div className={styles.container}>
      <img className={styles.loginImg} src="/anne_login.png"/>
      <h1 className={styles.header}>Annes Manager</h1>
      <div className={styles.signInWith}>sign in with</div>
      <div className={styles.loginButtons}>
        <button className={styles.loginButton} onClick={onLogin}>
          <img src="/google.png" alt="" className={styles.google} />
        </button>
        <button className={styles.loginButton}>
          <img src="/facebook.png" alt="" className={styles.facebook} />
        </button>
        <button className={styles.loginButton}>
          <img src="/twitter.png" alt="" className={styles.facebook} />
        </button>
      </div>
    </div>
  );
};

export default Login;
