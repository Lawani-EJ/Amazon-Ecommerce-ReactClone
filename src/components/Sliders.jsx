import React from 'react';
import { Link } from 'react-router-dom';

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
import shopItem11 from "../assets/slider11.jpg"
import shopItem12 from "../assets/slider12.jpg"

import shopItem13 from "../assets/slider13.jpg"
import shopItem14 from "../assets/slider14.jpg"
import shopItem15 from "../assets/slider15.jpg"
import shopItem16 from "../assets/slider16.jpg"
import shopItem17 from "../assets/slider17.jpg"
import shopItem18 from "../assets/sloder18.jpg"
import shopItem19 from "../assets/slider19.jpg"
import shopItem20 from "../assets/slider20.jpg"

import shopItem22 from "../assets/slider22.jpg"
import shopItem23 from "../assets/slider23.jpg"
import shopItem24 from "../assets/slider24.jpg"
import shopItem25 from "../assets/slider25.jpg"
import shopItem26 from "../assets/slider26.jpg"
import shopItem27 from "../assets/slider27.jpg"
import shopItem28 from "../assets/slider28.jpg"
import shopItem29 from "../assets/slider29.jpg"
import shopItem30 from "../assets/slider30.jpg"
import shopItem31 from "../assets/slider31.jpg"
import shopItem32 from "../assets/slider32.jpg"
import shopItem33 from "../assets/slider33.jpg"
import shopItem34 from "../assets/slider34.jpg"
import shopItem35 from "../assets/slider35.jpg"
import shopItem36 from "../assets/slider36.jpg"
import shopItem37 from "../assets/slider37.jpg"
import shopItem38 from "../assets/slider39.jpg"

import shopItem40 from "../assets/slider40.jpg"
import shopItem41 from "../assets/slider41.jpg"
import shopItem42 from "../assets/slider42.jpg"
import shopItem43 from "../assets/slider43.jpg"
import shopItem44 from "../assets/slider44.jpg"
import shopItem45 from "../assets/slider45.jpg"
import shopItem46 from "../assets/slider46.jpg"
import shopItem47 from "../assets/slider47.jpg"
import shopItem48 from "../assets/slider48.jpg"
import shopItem49 from "../assets/slider49.jpg"

import shopItem50 from "../assets/slider50.jpg"
import shopItem51 from "../assets/slider51.jpg"
import shopItem52 from "../assets/slider52.jpg"
import shopItem53 from "../assets/slider53.jpg"
import shopItem54 from "../assets/slider54.jpg"
import shopItem55 from "../assets/slider55.jpg"
import shopItem56 from "../assets/slider56.jpg"
import shopItem57 from "../assets/slider57.jpg"
import shopItem58 from "../assets/slider58.jpg"
import shopItem59 from "../assets/slider59.jpg"
import shopItem60 from "../assets/slider60.jpg"
import shopItem61 from "../assets/slider61.jpg"
import shopItem62 from "../assets/slider62.jpg"

// import shopItem63 from "../assets/slider63.jpg"
// import shopItem64 from "../assets/slider64.jpg"
// import shopItem65 from "../assets/slider65.jpg"
// import shopItem66 from "../assets/slider66.jpg"
// import shopItem67 from "../assets/slider67.jpg"
// import shopItem68 from "../assets/slider68.jpg"
// import shopItem69 from "../assets/slider69.jpg"
// import shopItem70 from "../assets/slider70.jpg"

// import shopItem71 from "../assets/slider71.jpg"
// import shopItem72 from "../assets/slider72.jpg"
// import shopItem73 from "../assets/slider73.jpg"
// import shopItem74 from "../assets/slider74.jpg"
// import shopItem75 from "../assets/slider75.jpg"
// import shopItem76 from "../assets/slider76.jpg"
// import shopItem77 from "../assets/slider77.jpg"
// import shopItem78 from "../assets/slider78.jpg"
// import shopItem79 from "../assets/slider79.jpg"
// import shopItem80 from "../assets/slider80.jpg"


import '../css/slider.css';
import Cards2 from './Cards2';

const topSellers = [
  { id: 1, image: shopItem1 },
  { id: 2, image: shopItem2 },
  { id: 3, image: shopItem3 },
    { id: 4, image: shopItem4 },
    { id: 5, image: shopItem5 },
    { id: 6, image: shopItem6 },
    { id: 7, image: shopItem7 },
    { id: 8, image: shopItem8 },
    { id: 9, image: shopItem9 },
    { id: 10, image: shopItem10 },
    { id: 11, image: shopItem11 },
    { id: 12, image: shopItem12 },
    { id: 13, image: shopItem13 },
    { id: 14, image: shopItem14 },
    { id: 15, image: shopItem15 },
    { id: 16, image: shopItem16 },
    { id: 17, image: shopItem17 },
    { id: 18, image: shopItem18 },
    { id: 19, image: shopItem19 },
    { id: 20, image: shopItem20 }
];

const newReleases = [
    { id: 21, image: shopItem22 },
    { id: 22, image: shopItem23 },
    { id: 23, image: shopItem24 },
    { id: 24, image: shopItem25 },
    { id: 25, image: shopItem26 },
    { id: 26, image: shopItem27 },
    { id: 27, image: shopItem28 },
    { id: 28, image: shopItem29 },
    { id: 29, image: shopItem30 },
    { id: 30, image: shopItem31 },
    { id: 31, image: shopItem32 },
    { id: 32, image: shopItem33 },
    { id: 33, image: shopItem34 },
    { id: 34, image: shopItem35 },
    { id: 35, image: shopItem36 },
    { id: 36, image: shopItem37 },
    { id: 37, image: shopItem38 },
    { id: 38, image: shopItem40 },
    { id: 39, image: shopItem41 },
    { id: 40, image: shopItem42 },
];

const bestRated = [
    { id: 41, image: shopItem43 },
    { id: 42, image: shopItem44 },
    { id: 43, image: shopItem45 },
    { id: 44, image: shopItem46 },
    { id: 45, image: shopItem47 },
    { id: 46, image: shopItem48 },
    { id: 47, image: shopItem49 },
    { id: 48, image: shopItem50 },
    { id: 49, image: shopItem51 },
    { id: 50, image: shopItem52 },
    { id: 51, image: shopItem53 },
    { id: 52, image: shopItem54 },
    { id: 53, image: shopItem55 },
    { id: 54, image: shopItem56 },
    { id: 55, image: shopItem57 },
    { id: 56, image: shopItem58 },
    { id: 57, image: shopItem59 },
    { id: 58, image: shopItem60 },
    { id: 59, image: shopItem61 },
    { id: 60, image: shopItem62 },
];

const SlideSection = ({ title, products }) => {
  return (
    <div className="slide-sec">
      <div className="l-btn btn-1c"><i className="fa-solid fa-chevron-left"></i></div>
      <div className="r-btn btn-1d"><i className="fa-solid fa-chevron-right"></i></div>
      <h3>{title}</h3>
      <ul className="product-slide product-slide-2">
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={`Shop Item ${product.id}`} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ShopItemsSlider = () => {
  return (
    <>
      <SlideSection title="Top Sellers in Books" products={topSellers} />
      <SlideSection title="New Releases" products={newReleases} />
      <SlideSection title="Best Rated" products={bestRated} />
      <Cards2 />
      <SlideSection title="Top Sellers in Electronics" products={topSellers} />
      <SlideSection title="Top Sellers in Fashion" products={newReleases} />
      <SlideSection title="Top Sellers in Home & Kitchen" products={bestRated} />
    </>
  );
}

export default ShopItemsSlider;

