import React from "react";
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
  
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>🎁 Annes manager 💝</h3>
      <div className={styles.loginButtons}>
        <button className={styles.googleLogin} onClick={onLogin}>
          Google 로그인
        </button>
        <button className={styles.googleLogin}>
          Facebook 로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
