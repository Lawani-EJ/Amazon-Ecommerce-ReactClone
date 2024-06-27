import React from 'react';
import cardImg5 from '../assets/cardImg5.jpg';
import cardImg6 from '../assets/cardImg6.jpg';
import cardImg7 from '../assets/cardImg7.jpg';
import cardImg8 from '../assets/cardImg8.jpg';
import "../css/cards.css"
const Cards2 = () => {
  return (
    <section className="product-comp">
    <div className="box box-c">
      <h3>For your Fitness Needs</h3>
      <div className="image-container">
        <img src={cardImg5} alt="Fitness Equipment" />
      </div>
      <a href="#">Shop Now</a>
    </div>
    <div className="box box-c">
      <h3>Create with Strip Lights</h3>
      <div className="image-container">
        <img src={cardImg6} alt="Strip Lights" />
      </div>
      <a href="#">Shop Now</a>
    </div>
    <div className="box box-c">
      <h3>New arrivals in Toys</h3>
      <div className="image-container">
        <img src={cardImg7} alt="Craft Toys" />
      </div>
      <a href="#">Shop Now</a>
    </div>
    <div className="box box-c">
      <h3>Kindle E Readers</h3>
      <div className="image-container">
        <img src={cardImg8} alt="Kindle E Readers" />
      </div>
      <a href="#">Shop Now</a>
    </div>
  </section>
  );
}

export default Cards2;
