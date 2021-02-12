import React from "react";
import styles from "./Gamebox.module.css";

const GameBox = () => {
  // const [count, setCount] = useState(0);
  const urls = [
    "age.jpeg",
    "av.jpeg",
    "hq.png",
    "hs.png",
    "jq.jpg",
    "lk.jpg",
    "sm.jpg",
    "smm.png",
    "the-dark-knight.png",
  ];

  return (
    <main className={styles.gamebox}>
      <h2>Let's go!</h2>
      <section className={styles.wrap}>
        <div className={styles.card}></div>
      </section>
    </main>
  );
};

export default GameBox;
