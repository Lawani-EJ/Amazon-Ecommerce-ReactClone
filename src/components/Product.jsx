import React from 'react';
import { useParams } from 'react-router-dom';
import product1 from '../assets/slider1.jpg'
import '../css/product.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Product = () => {
  const { id } = useParams(); 

  return (
    <>
      <div>
        <Header/>
        <Navbar/>
        <section id="product-info">
          <div className="item-image-parent">
            <div className="item-list-vertical">
              <div className="thumb-box">
                <img src={product1} alt="thumbnail" />
              </div>
              <div className="thumb-box">
                <img src={product1} alt="thumbnail" />
              </div>
              <div className="thumb-box">
                <img src={product1} alt="thumbnail" />
              </div>
            </div>
            <div className="item-image-main">
              <img src={product1} alt="default" />
            </div>
          </div>

          <div className="item-info-parent">
            <div className="main-info">
              <h4>EYEBOGLER Regular Fit Men's Cotton T-Shirt</h4>
              <div className="star-rating">
                <span>★★★★</span>★
              </div>
              <p>Price: <span id="price">$ 449.00</span></p>
            </div>
            <div className="select-items">
              <div className="change-color">
                <label><b>Colour:</b> Black</label><br />
                <div className="thumb-box">
                  <img src={product1} alt="thumbnail" />
                </div>
                <div className="thumb-box">
                  <img src={product1} alt="thumbnail" />
                </div>
                <div className="thumb-box">
                  <img src={product1} alt="thumbnail" />
                </div>
                {/* Repeat for other colors */}
              </div>

              <div className="change-size">
                <label><b>Size:</b></label><br />
                <select>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>2XL</option>
                </select>
              </div>

              <div className="description">
                <ul>
                  <li>Care Instructions: Machine Wash</li>
                  <li>Fit Type: Classic Fit</li>
                  <li>Color name: Black-White</li>
                  <li>Material: Cotton</li>
                  <li>Pattern: Solid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  )
}

export default Product;
