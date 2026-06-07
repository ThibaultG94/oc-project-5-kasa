function Banner({ image, alt = "", title }) {
  return (
    <section className="banner">
      <img src={image} alt={alt} className="banner__image" />
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  );
}

export default Banner;
