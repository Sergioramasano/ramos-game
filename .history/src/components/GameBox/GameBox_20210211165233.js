import React, { useState, useEffect } from "react";
import Cards from "../Cards";
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
  const [imgUrl, setImgUrl] = useState(null);
  const [currentUrlIdx, setCurrentUrlIdx] = useState(null);

  let urls = [age, av, hq, hs, jq, lk, sm, smm, knight];
  urls = urls.map((url, idx) => {
    return { name: url, id: Math.random(), visible: false, idx };
  });

  urls = [...urls, ...urls];
  const setImg = (url) => {
    setImgUrl(url);
    setCurrentUrlIdx(url.idx);
  };
  useEffect(() => {
    if (imgUrl && currentUrlIdx) {
      urls.forEach((u) => {
        if (u.idx === imgUrl.idx) {
          u.visible = true;
          console.log(u.visible);
          setTimeout(() => {
            u.visible = false;
            console.log(u.visible);
          }, 1000);
        }
      });
    }
  }, [currentUrlIdx]);
  return (
    <main className={styles.gamebox}>
      <h2>Let's go!</h2>
      <section updateMe={currentUrlIdx} className={styles.wrap}>
        <Cards urls={urls} styles={styles} setImg={setImg} star={star}></Cards>
      </section>
    </main>
  );
};

export default GameBox;
