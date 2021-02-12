import React from "react";
import styles from "./Gamebox.module.css";

const GameBox = () => {
  return (
    <main className={styles.gamebox}>
      <h2>Let's go!</h2>
      <section className={styles.wrap}></section>
    </main>
  );
};

export default GameBox;
