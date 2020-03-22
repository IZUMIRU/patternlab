// https://demo.patternlab.io/?p=pages-login

import React, { FC } from "react";
import logo from "logo.svg";
import styles from "./Login.module.css";

const Login: FC = () => {
  return (
    <React.Fragment>
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <img className={styles.logo} src={logo} alt="logo" />
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
              type="text"
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
};

export default Login;
