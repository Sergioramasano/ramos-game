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

  let urls = [];
  urls = [age, av, hq, hs, jq, lk, sm, smm, knight];
  urls = [...urls, ...urls];
  urls = urls.map((url, idx) => {
    return { name: url, id: Math.random(), visible: false, idx };
  });
  if (imgUrl !== null) {
    urls[imgUrl].visible = !urls[imgUrl].visible;

    setTimeout(() => {
      urls[imgUrl].visible = !urls[imgUrl].visible;
      console.log(0);
    }, 2000);
  }

  const setImg = (url) => {
    setImgUrl(url);
    setCurrentUrlIdx(url);
  };

  return (
    <main className={styles.gamebox}>
      <h2>Let's go!</h2>
      <section className={styles.wrap}>
        <Cards
          urls={urls}
          styles={styles}
          setImg={setImg}
          star={star}
          currentUrlIdx={currentUrlIdx}
        ></Cards>
      </section>
    </main>
  );
};

export default GameBox;
