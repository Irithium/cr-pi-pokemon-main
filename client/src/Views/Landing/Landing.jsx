import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export const Landing = () => {
  return (
    <div className={styles.landingcont}>
      <div className={styles.flexboxalign}>
        <h1 className={styles.landingText}>
          Bienvenidos al proyecto individual
        </h1>
      </div>
      <div>
        <Link className={styles.landingHomeButton} to={"/home"}>
          HOME
        </Link>
      </div>
    </div>
  );
};
