import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://thecore.dev" target="_blank" rel="noopener noreferrer">
        Made with 🧡 by THE CORE devs
      </a>
    </footer>
  );
};

export default Footer;
