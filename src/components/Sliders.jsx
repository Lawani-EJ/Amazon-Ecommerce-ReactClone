import React from 'react';
import shopItem1 from '../assets/slider1.jpg';
import shopItem2 from '../assets/slider2.jpg';
import shopItem3 from '../assets/slider3.jpg';
import shopItem4 from '../assets/slider4.jpg';
import shopItem5 from '../assets/slider5.jpg';
import shopItem6 from '../assets/slider6.jpg';
import shopItem7 from '../assets/slider7.jpg';
import shopItem8 from '../assets/slider8.jpg';
import shopItem9 from '../assets/slider9.jpg';
import shopItem10 from '../assets/slider10.jpg';
import '../css/slider.css';

const ShopItemsSlider = () => {
  return (
    <div className="slide-sec">
      <div className="l-btn btn-1c"><i className="fa-solid fa-chevron-left"></i></div>
      <div className="r-btn btn-1d"><i className="fa-solid fa-chevron-right"></i></div>
      <h3>Top Sellers in Books</h3>
      <ul className="product-slide product-slide-2">
        <li><img src={shopItem1} alt="Shop Item 1" /></li>
        <li><img src={shopItem2} alt="Shop Item 2" /></li>
        <li><img src={shopItem3} alt="Shop Item 3" /></li>
        <li><img src={shopItem4} alt="Shop Item 4" /></li>
        <li><img src={shopItem5} alt="Shop Item 5" /></li>
        <li><img src={shopItem6} alt="Shop Item 6" /></li>
        <li><img src={shopItem7} alt="Shop Item 7" /></li>
        <li><img src={shopItem8} alt="Shop Item 8" /></li>
        <li><img src={shopItem9} alt="Shop Item 9" /></li>
        <li><img src={shopItem10} alt="Shop Item 10" /></li>
      </ul>
    </div>
  );
}

export default ShopItemsSlider;
