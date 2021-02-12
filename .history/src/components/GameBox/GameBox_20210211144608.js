import React from "react";
import styles from "./Gamebox.module.css";
import age from "../../images/age.jpeg";
import age from "../../images/av.jpeg";
import age from "../../images/hq.png";
import age from "../../images/hs.png";
import age from "../../images/jq.jpg";
import age from "../../images/lk.jpg";
import age from "../../images/sm.jpg";
import age from "../../images/smm.png";
import age from "../../images/the-dark-knight.png";

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
        <div className={styles.card}>
          <img src="../../images/age.jpeg" alt=""></img>
        </div>
      </section>
    </main>
  );
};

export default GameBox;
