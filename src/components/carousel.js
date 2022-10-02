const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide d-block m-auto"
      data-bs-ride="true"
      style={{ width: "75vw" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn1.epicgames.com/calluna/offer/2560x1440_CUE_OfferAsset-2560x1440-d4f5cbd300d45b7c510bc962028f8071.jpg"
            className="d-block w-100"
            alt="Control Poster"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images4.alphacoders.com/833/833257.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://2.bp.blogspot.com/-mygXKigxk1s/XQAJpkw_sNI/AAAAAAAAHEQ/3Uy4nVgvH_4wKzP1v0PfxON0NHqO-SBZgCKgBGAs/w0/star-wars-jedi-fallen-order-cal-kestis-characters-uhdpaper.com-4K-22.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
