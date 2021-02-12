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
  const [updateNow, setUpdateNow] = useState(true);

  const updateFunc = () => {
    setUpdateNow(!updateNow);
    console.log(1111, updateNow);
  };

  let urls = [age, av, hq, hs, jq, lk, sm, smm, knight];
  urls = urls.map((url, idx) => {
    return { name: url, id: Math.random(), visible: false, idx };
  });

  urls = [...urls, ...urls];
  const setImg = (url) => {
    setImgUrl(url);
    setCurrentUrlIdx(url.idx);
    updateFunc();
  };
  useEffect(() => {
    console.log(44);
    if (imgUrl && currentUrlIdx) {
      urls.forEach((u) => {
        if (u.idx === imgUrl.idx) {
          u.visible = true;
          console.log(u.visible);

          setTimeout(() => {
            u.visible = false;
            console.log(u.visible);
            updateFunc();
          }, 1000);
        }
      });
    }
  }, [currentUrlIdx]);
  return (
    <main className={styles.gamebox}>
      <h2>Let's go!</h2>
      <section className={styles.wrap}>
        <Cards
          urls={urls}
          styles={styles}
          setImg={setImg}
          star={star}
          updateMe={updateNow}
          currentUrlIdx={currentUrlIdx}
        ></Cards>
      </section>
    </main>
  );
};

export default GameBox;
