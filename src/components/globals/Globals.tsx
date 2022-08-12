import styles from "./globals.module.css";

export const Navbar = () => {
  return (
    <header>
      <nav className={styles.navbar} role="navigation">
        <h2>Navbar Component</h2>
      </nav>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__details}>
        <h2>Copyright &copy; {new Date().getFullYear()}</h2>
        <h4>MADE WITH ❤ FROM CAMEROON</h4>
      </div>
    </footer>
  );
};
