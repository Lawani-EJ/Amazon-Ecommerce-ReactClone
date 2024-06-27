import React from 'react'
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
import "../css/slider.css"
const Sliders2 = () => {
  return (
    <div>
          <div className="slide-sec">
      <div className="l-btn btn-1c"><i className="fa-solid fa-chevron-left"></i></div>
      <div className="r-btn btn-1d"><i className="fa-solid fa-chevron-right"></i></div>
      <h3>Top Sellers in Books</h3>
      <ul className="product-slide product-slide-2">
        <li><img src={shopItem11} alt="Shop Item 1" /></li>
        <li><img src={shopItem12} alt="Shop Item 2" /></li>
        <li><img src={shopItem13} alt="Shop Item 3" /></li>
        <li><img src={shopItem14} alt="Shop Item 4" /></li>
        <li><img src={shopItem15} alt="Shop Item 5" /></li>
        <li><img src={shopItem16} alt="Shop Item 6" /></li>
        <li><img src={shopItem17} alt="Shop Item 7" /></li>
        <li><img src={shopItem18} alt="Shop Item 8" /></li>
        <li><img src={shopItem19} alt="Shop Item 9" /></li>
        <li><img src={shopItem20} alt="Shop Item 10" /></li>
      </ul>
    </div>
    </div>
  )
}

export default Sliders2
