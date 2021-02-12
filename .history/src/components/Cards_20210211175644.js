const Cards = (urls) => {
  return urls.urls.map((url) => {
    return (
      <div
        className={urls.styles.card}
        key={Math.random()}
        onClick={() => urls.setImg(url.idx)}
      >
        {url.visible === true ? (
          <img src={url.name} alt="avatar"></img>
        ) : (
          <img src={urls.star} alt="star"></img>
        )}
      </div>
    );
  });
};

export default Cards;
