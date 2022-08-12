// external packages
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  FaHome, FaHeart, FaSpinner, FaBars, FaStar,
} from "react-icons/fa";
import { TbComponents } from "react-icons/tb";

// stylesheet
import styles from "./globals.module.css";

export const Navbar: React.FC = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  return (
    <header>
      <nav
        className={`${styles.navbar} ${styles.flex} ${styles.a_j__center}`}
        role="navigation"
      >
        <div className={styles.navbar__logo}>
          <Link to="/">
            <h4>React UI Toolkit</h4>
          </Link>
        </div>
        <ul
          className={`${styles.navbar__menu} ${styles.flex} ${
            isMobileNavActive ? styles.show : ""
          }`}
        >
          <li
            className={`${styles.flex} ${styles.a_j__center} ${
              window.location.pathname === "/" ? styles.active : ""
            }`}
          >
            <Link to="/">
              <FaHome size={18} />
              Home
            </Link>
          </li>
          <li
            className={`${styles.flex} ${styles.a_j__center} ${
              window.location.pathname === "/templates" ? styles.active : ""
            }`}
          >
            <Link to="/templates">
              <FaSpinner size={18} />
              Templates
            </Link>
          </li>
          <li
            className={`${styles.flex} ${styles.a_j__center} ${
              window.location.pathname === "/components" ? styles.active : ""
            }`}
          >
            <Link to="/components">
              <TbComponents size={18} />
              Components
            </Link>
          </li>
          <li
            className={`${styles.flex} ${styles.a_j__center} ${
              window.location.pathname === "/components" ? styles.active : ""
            }`}
          >
            <Link to="/components">
              <FaStar size={18} />
              Premium
            </Link>
          </li>
          ;
        </ul>

        <div className={styles.navbar__menu__toggler}>
          <FaBars
            onClick={() => setIsMobileNavActive(!isMobileNavActive)}
            style={{ cursor: "pointer" }}
            size={25}
          />
        </div>
      </nav>
    </header>
  );
};

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={`${styles.footer__details} ${styles.flex}`}>
      <h4>
        Copyright &copy;
        {new Date().getFullYear()}
      </h4>
      <h4>
        Made with
        {' '}
        <FaHeart size={18} color="#ff4500" />
        {' '}
        from Cameroon
      </h4>
    </div>
  </footer>
);
