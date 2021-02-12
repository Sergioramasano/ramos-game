import React, { useState, useEffect } from "react";
import Cards from "../Cards";
import styles from "./Gamebox.module.css";
import star from "../../images/star.jpeg";
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
  const [imgUrl, setImgUrl] = useState(null);
  const [bingo, setBingo] = useState([]);
  const [currentUrlIdx, setCurrentUrlIdx] = useState(null);

  let urls = [];

  const mappingUrls = () => {
    urls = urls.map((url, idx) => {
      return { name: url, id: Math.random(), visible: false, idx };
    });
  };

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  const transformUrls = () => {
    urls = [age, av, hq, hs, jq, lk, sm, smm, knight];
    urls = [...urls, ...urls];
    mappingUrls();
    shuffle(urls);
  };

  transformUrls();

  if (imgUrl !== null) {
    urls[imgUrl].visible = true;
  }

  if (bingo.length) {
    bingo.forEach((b) => {
      urls[b].visible = true;
    });
  }

  const restart = () => {
    setBingo([]);
    mappingUrls();
  };

  const setImg = (url) => {
    if (currentUrlIdx && currentUrlIdx.name === url.name) {
      setBingo([...bingo, currentUrlIdx.idx, url.idx]);
    }
    setImgUrl(url.idx);
    setCurrentUrlIdx(url);
  };

  return (
    <main className={styles.gamebox}>
      {bingo.length === urls.length ? <h2>You won!</h2> : <h2>Let's go!</h2>}
      <section className={styles.wrap}>
        {bingo.length === urls.length ? (
          <button onClick={restart} className={styles.button}>
            Restart
          </button>
        ) : (
          <Cards
            key={currentUrlIdx}
            urls={urls}
            styles={styles}
            setImg={setImg}
            star={star}
            currentUrlIdx={currentUrlIdx}
          ></Cards>
        )}
      </section>
    </main>
  );
};

export default GameBox;
