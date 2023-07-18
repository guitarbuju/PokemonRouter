import { Link } from "react-router-dom";
import styles from "./header.module.css";


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttongroup}>
        <button className="btn btn-danger">
          <Link to="/" className={styles.link}>Home</Link>
        </button>
        <button className="btn btn-danger">
          <Link className={styles.link} to="/about">About</Link>
        </button>
        <button className="btn btn-danger">
          <Link className={styles.link} to="/contact">Contact</Link>
        </button>
        <button className="btn btn-danger">
          <Link className={styles.link} to="/pokemon">By Page</Link>
        </button>
        <button className="btn btn-danger">
          <Link className={styles.link} to="/pokemon2">By Buttons</Link>
        </button>
        <button className="btn btn-danger">
          <Link className={styles.link} to="/pokemon3">By Cards</Link>
        </button>
      </div>
      <h2>!!!!POKEMON HERE!!!!</h2>
    </div>
  );
};

export default Header;
