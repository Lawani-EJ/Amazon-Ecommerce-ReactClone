import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cardImg from '../assets/cardImg.jpg';
import cardImg2 from '../assets/cardImg2.jpg';
import cardImg3 from '../assets/cardImg3.jpg';
import cardImg4 from '../assets/cardimg4.jpg';
import '../css/cards.css';

const Cards = () => {
  return (
    <div className="container my-3 custom-cards">
      <div className="row">
        <div className="col-md-8">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 custom-card-height">
                <img src={cardImg} className="card-img-top custom-card-img" alt="Gaming Accessories" />
                <div className="card-body text-center">
                  <h5 className="card-title">Gaming Accessories</h5>
                  <a href="#" className="mt-3 d-block">See More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 custom-card-height">
                <img src={cardImg2} className="card-img-top custom-card-img" alt="Electronics" />
                <div className="card-body text-center">
                  <h5 className="card-title">Electronics</h5>
                  <a href="#" className="mt-3 d-block">See More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 custom-card-height">
                <img src={cardImg3} className="card-img-top custom-card-img" alt="Find your ideal TV" />
                <div className="card-body text-center">
                  <h5 className="card-title">Find your ideal TV</h5>
                  <a href="#" className="mt-3 d-block">See More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card custom-signin-card mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Sign in for your best experience</h5>
              <button className="btn btn-warning mt-3">Sign in securely</button>
            </div>
          </div>
          <div className="custom-image-wrapper">
            <img src={cardImg4} className="custom-card-img" alt="Special Offer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
