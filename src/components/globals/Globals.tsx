// external packages
import { Link } from "react-router-dom";
import {
  FaHome,
  FaHeart,
  FaSpinner,
  FaCreativeCommonsPd,
} from "react-icons/fa";

// stylesheet
import styles from "./globals.module.css";

export const Navbar = () => {
  return (
    <header>
      <nav
        className={`${styles.navbar} ${styles.flex} ${styles.a_j__center}`}
        role="navigation"
      >
        <div className={styles.navbar__logo}>
          <h4>React UI Toolkit</h4>
        </div>
        <ul className={`${styles.navbar__menu} ${styles.flex}`}>
          <li className={`${styles.flex} ${styles.a_j__center}`}>
            <Link to="/">
              <FaHome size={18} />
              Home
            </Link>
          </li>
          <li className={`${styles.flex} ${styles.a_j__center}`}>
            <Link to="/">
              <FaSpinner size={18} />
              About
            </Link>
          </li>
          <li className={`${styles.flex} ${styles.a_j__center}`}>
            <Link to="/">
              <FaCreativeCommonsPd size={18} />
              Components
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__details} ${styles.flex}`}>
        <h4>Copyright &copy; {new Date().getFullYear()}</h4>
        <h4>
          Made with <FaHeart size={18} color="#ff4500" /> from Cameroon
        </h4>
      </div>
    </footer>
  );
};
