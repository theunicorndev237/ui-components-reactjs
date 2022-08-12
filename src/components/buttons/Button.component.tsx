import React from "react";

// stylesheet
import styles from "./button.module.css";

type Props = {
  text: string;
  type: string;
};

const Button: React.FC<Props> = ({ text, type }) => (
  <button type="button" aria-label={type} className={styles.btn}>
    {text}
  </button>
);

export default Button;
