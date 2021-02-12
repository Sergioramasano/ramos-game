const Cards = (urls, styles, setImg, star) => {
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
};
