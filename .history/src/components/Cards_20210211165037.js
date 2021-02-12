const Cards = (urls, styles, setImg, star) => {
  if (urls.length) {
    return urls.map((url) => {
      return (
        <div
          className={styles.card}
          key={Math.random()}
          onClick={() => setImg(url)}
        >
          {url.visible === true ? (
            <img src={url.name} alt="avatar"></img>
          ) : (
            <img src={star} alt="star"></img>
          )}
        </div>
      );
    });
  }
};

export default Cards;
