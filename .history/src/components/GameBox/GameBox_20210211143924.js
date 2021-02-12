import React from "react";
import styles from "./Gamebox.module.css";

const GameBox = () => {
  // const [count, setCount] = useState(0);
  const urls = [
    "age.jpeg",
    "av.jpeg",
    "hq.jpeg",
    "hs.jpeg",
    "jq.jpeg",
    "lk.jpeg",
    "sm.jpeg",
    "smm.jpeg",
    ".jpeg",
  ];

  return (
    <main className={styles.gamebox}>
      <h2>Let's go!</h2>
      <section className={styles.wrap}></section>
    </main>
  );
};

export default GameBox;
