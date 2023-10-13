import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div>
      <div className={styles.gifContainer}>
        <img
          src={require("../../Assets/61-pikachu-game-usagif.gif")}
          alt="Gif Pikachu"
          className={styles.pikachuGif}
        />
      </div>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Bienvenidos al proyecto individual</span>
        <img
          src={require("../../Assets/WiCJ.gif")}
          alt="Greeting Pikachu"
          className={styles.greetingPikachu}
        />
      </div>

      <div>
        <Link to={"/home"}>
          <button className={styles.homeButton}>HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
