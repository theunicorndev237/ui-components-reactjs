import React from "react";
// import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

// stylesheet
import styles from "./landing.module.css";

const LandingPage: React.FC = () => {
  return (
    <div className={styles.landing}>
      <div
        className={`${styles.hero__section} ${styles.flex} ${styles.a_j__center} ${styles.flex__column}`}
      >
        <h1>Find Intuitive React Components</h1>
        <h2>Designed Just For You.</h2>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/theunicorndev237/ui-components-reactjs"
        >
          <button className={`${styles.flex} ${styles.a_j__center}`}>
            <FaGithub style={{ marginRight: "0.5rem" }} /> View on Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
