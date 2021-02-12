import React from "react";
import styles from "./Gamebox.module.css";
import age from "../../images/age.jpeg";
import av from "../../images/av.jpeg";
import hq from "../../images/hq.png";
import hs from "../../images/hs.png";
import jq from "../../images/jq.jpg";
import lk from "../../images/lk.jpg";
import sm from "../../images/sm.jpg";
import smm from "../../images/smm.png";
import knight from "../../images/knight.png";

const GameBox = () => {
  // const [count, setCount] = useState(0);
  const urls = [age, av, hq, hs, jq, lk, sm, smm, knight];

  return (
    <main className={styles.gamebox}>
      <h2>Let's go!</h2>
      <section className={styles.wrap}>
        <div className={styles.card}>
          {urls.map((url) => {
            return <img src={url} alt=""></img>;
          })}
        </div>
      </section>
    </main>
  );
};

export default GameBox;
