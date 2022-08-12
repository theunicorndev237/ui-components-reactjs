import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

// stylesheet
import styles from "./landing.module.css";

// components

const LandingPage = (): JSX.Element => (
  <div className={styles.landing}>
    <div
      className={`${styles.hero__section} ${styles.flex} ${styles.a_j__center} ${styles.flex__column}`}
    >
      <h1>Find Intuitive React Components</h1>
      <h2>Designed Just For You.</h2>
      <div className={`${styles.btn__group} ${styles.flex}`}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/theunicorndev237/ui-components-reactjs"
        >
          <button
            type="button"
            className={`${styles.flex} ${styles.a_j__center}`}
          >
            <FaGithub style={{ marginRight: "0.5rem" }} />
            View on Github
          </button>
        </a>
        <Link to="/templates">
          <button
            type="button"
            className={`${styles.flex} ${styles.a_j__center}`}
          >
            <FaGithub style={{ marginRight: "0.5rem" }} />
            View Templates
          </button>
        </Link>
      </div>
    </div>

    <section className={`${styles.section} ${styles.info}`}>
      <div className={styles.head}>
        <h2>Enjoy The Workflow</h2>
      </div>
    </section>
  </div>
);

export default LandingPage;
