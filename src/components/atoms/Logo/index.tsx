import React, { FC } from "react";
import logo from "./logo.svg";
import styles from "./style.module.scss";

// TODO: atomsでスタイル当てている
const Logo: FC = () => <img className={styles.logo} src={logo} alt="logo" />;

export default Logo;
