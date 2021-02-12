import React, { useState } from "react";
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
import star from "../../images/star.jpeg";

const GameBox = () => {
  const [visible, setVisible] = useState(false);
  let urls = [age, av, hq, hs, jq, lk, sm, smm, knight];
  urls = urls.map((url) => {
    return { name: url, id: Math.random() };
  });
  urls = [...urls, ...urls];
  const toggleImage = (key) => {
    console.log(key);
  };
  return (
    <main className={styles.gamebox}>
      <h2>Let's go!</h2>
      <section className={styles.wrap}>
        {urls.map((url) => {
          return (
            <div
              className={styles.card}
              key={Math.random()}
              onClick={toggleImage(url.id)}
            >
              {visible ? (
                <img src={url.name} alt="avatar"></img>
              ) : (
                <img src={star} alt="star"></img>
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default GameBox;
