import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Cards from './Cards';
import ShopItemsSlider from './Sliders';
import Footer from './Footer';
import Cards2 from './Cards2';

const Homepage = ({ cartCount }) => {
  return (
    <div>
      <Header cartCount={cartCount} />
      <Navbar />
      <Carousel />
      <Cards />
      <ShopItemsSlider />
      <Cards2 />
      <ShopItemsSlider />
      <Footer />
    </div>
  );
};

export default Homepage;
