import React, { FC } from "react";
import Logo from "components/atoms/Logo";
import styles from "./style.module.css";

// https://demo.patternlab.io/?p=pages-login
const Login: FC = () => (
  <React.Fragment>
    <div className={styles.box}>
      <div className={styles.boxHeader}>
        <Logo />
      </div>
      <form>
        <div className={styles.field}>
          <label className={styles.label}>Username</label>
          <input
            className={styles.inputText}
            type="text"
            placeholder="Username or email address"
          ></input>
          <span className={styles.note}>
            Enter your username or email address
          </span>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.inputText}
            type="password"
            placeholder="Password"
          ></input>
          <span className={styles.note}>
            Minimum of 6 characters.{" "}
            <a className={styles.link} href="/">
              Forgot password?
            </a>
          </span>
        </div>
        <div className={styles.action}>
          <button className={styles.button}>Log Me In!</button>
        </div>
      </form>
    </div>
  </React.Fragment>
);

export default Login;
