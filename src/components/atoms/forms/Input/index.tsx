import React, { FC, InputHTMLAttributes } from "react";
import styles from "./style.module.scss";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

// TODO: atomsでスタイル当てている
const Input: FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => (
  <input
    className={styles.input}
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;
