const Cards = (urls) => {
  console.log(urls, 44);
  return urls.urls.map((url) => {
    return (
      <div
        className={urls.styles.card}
        key={Math.random()}
        onClick={() => urls.setImg(urls.url)}
      >
        {url.visible === true ? (
          <img src={urls.url.name} alt="avatar"></img>
        ) : (
          <img src={urls.star} alt="star"></img>
        )}
      </div>
    );
  });
};

export default Cards;
