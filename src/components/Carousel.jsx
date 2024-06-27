import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from '../assets/carousel1 (1).jpg';
import carousel2 from '../assets/carousel1 (2).jpg';
import carousel3 from '../assets/carousel1 (3).jpg';

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carousel1} className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src={carousel3} className="d-block w-100" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
