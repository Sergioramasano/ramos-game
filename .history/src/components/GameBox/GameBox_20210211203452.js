import React, { useState } from "react";
import Cards from "../Cards";
import styles from "./Gamebox.module.css";
import star from "../../images/star.jpeg";

const GameBox = (props) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [bingo, setBingo] = useState([]);
  const [currentUrlIdx, setCurrentUrlIdx] = useState(null);

  let urls = [];
  const mappingUrls = () => {
    urls = urls.map((url, idx) => {
      return { name: url, id: Math.random(), visible: false, idx };
    });
  };

  const transformUrls = () => {
    urls = props.shuffleArray;
    urls = [...urls, ...urls];
    mappingUrls();
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
    if (
      currentUrlIdx &&
      currentUrlIdx.name === url.name &&
      currentUrlIdx.idx !== url.idx &&
      !bingo.includes(url.idx)
    ) {
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
            urls={urls}
            styles={styles}
            setImg={setImg}
            star={star}
          ></Cards>
        )}
      </section>
      <button onClick={() => props.shuffle} className={styles.button}>
        Restart
      </button>
    </main>
  );
};

export default GameBox;
