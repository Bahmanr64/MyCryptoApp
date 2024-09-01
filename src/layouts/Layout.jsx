import { PiHandHeartFill } from "react-icons/pi";
import { LiaCoinsSolid } from "react-icons/lia";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Crypto App <LiaCoinsSolid />
        </h1>
        <p>Bahman&Elis 's Electronic Coin Crypto</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed by Bahman Ramezani{" "}
          <PiHandHeartFill color="red" size="30px" />
        </p>
      </footer>
    </>
  );
}

export default Layout;
