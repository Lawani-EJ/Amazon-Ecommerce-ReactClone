import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import product1 from '../assets/slider1.jpg';
import '../css/product.css';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Product = ({ onAddToCart, cartCount }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (typeof onAddToCart === 'function') {
      onAddToCart(quantity);
      alert(`Added ${quantity} items to cart`);
    } else {
      console.error('onAddToCart is not a function');
    }
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Navbar />
      <div className="container mt-5">
        <section id="product-info" className="row">
          <div className="col-md-6">
            <div className="item-image-parent">
              <div className="item-list-vertical d-flex flex-column">
                <div className="thumb-box mb-2">
                  <img src={product1} alt="thumbnail" className="img-thumbnail" />
                </div>
                <div className="thumb-box mb-2">
                  <img src={product1} alt="thumbnail" className="img-thumbnail" />
                </div>
                <div className="thumb-box mb-2">
                  <img src={product1} alt="thumbnail" className="img-thumbnail" />
                </div>
              </div>
              <div className="item-image-main">
                <img src={product1} alt="default" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="item-info-parent">
              <div className="main-info">
                <h4>Gaming Headset for PS4, PS5, PC, Xbox One, Over-Ear Gaming Headphones with Noise Cancelling Mic, Premium Stereo, Lightweight Comfortable Earmuffs for Switch Laptop Mobile, Red (GM-1)</h4>
                <div className="star-rating">
                  <span>★★★★</span>★
                </div>
                <p>Price: <span id="price">$ 449.00</span></p>
              </div>
              <div className="select-items">
                <div className="change-color mb-3">
                  <label><b>Colour:</b> Black</label><br />
                  <div className="d-flex">
                    <div className="thumb-box mr-2">
                      <img src={product1} alt="thumbnail" className="img-thumbnail" />
                    </div>
                    <div className="thumb-box mr-2">
                      <img src={product1} alt="thumbnail" className="img-thumbnail" />
                    </div>
                    <div className="thumb-box">
                      <img src={product1} alt="thumbnail" className="img-thumbnail" />
                    </div>
                  </div>
                </div>

                <div className="change-size mb-3">
                  <label><b>Size:</b></label><br />
                  <select className="form-control w-50">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>2XL</option>
                  </select>
                </div>

                <div className="description mb-3">
                  <ul>
                    <li>Brand Jabra</li>
                    <li>Colour Black</li>
                    <li>Ear placement On Ear</li>
                    <li>Noise control Sound Isolation</li>
                    <li>Model name Evolve2 65</li>
                  </ul>
                </div>

                <div className="add-to-cart">
                  <label><b>Quantity:</b></label><br />
                  <div className="input-group w-50 mb-3">
                    <div className="input-group-prepend">
                      <button className="btn btn-outline-secondary" type="button" onClick={handleSubtractQuantity}>-</button>
                    </div>
                    <input type="text" className="form-control text-center" value={quantity} readOnly />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" onClick={handleAddQuantity}>+</button>
                    </div>
                  </div>
                  <button onClick={handleAddToCart} className="btn btn-warning btn-block">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Product;
