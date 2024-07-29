import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../css/slider.css";

const Sliders = () => {
  const [products, setProducts] = useState([]);
  const slideRef = useRef(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => setProducts(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="slide-sec">
      <h3>New Products</h3>
      <ul className="product-slide product-slide-2" ref={slideRef}>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sliders;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import "../css/ProductList.css";

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         axios.get('https://fakestoreapi.com/products')
//             .then(res => setProducts(res.data))
//             .catch(error => console.log(error));
//     }, []);

//     return (
//         <Container>
//             <Row>
//                 {products.map(product => (
//                     <Col key={product.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
//                         <Card>
//                             <Card.Img variant="top" src={product.image} alt={product.title} />
//                             <Card.Body>
//                                 <Card.Title>{product.title}</Card.Title>
//                                 <Card.Text>
//                                     <strong>${product.price}</strong>
//                                 </Card.Text>
//                                 <Link to={`/product/${product.id}`}>
//                                     <Button variant="primary">View Product</Button>
//                                 </Link>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// };

// export default ProductList;

// const SlideSection = () => {
//   const [product, setProducts] = useState([]);

//   useEffect(() =>{
//     axios.get('https://fakestoreapi.com/products')
//     .then(res => setProducts(res.data))
//     .catch(error => console.log(error));
//   },[]);

//   return (
//     <div className="slide-sec">
//       <div className="l-btn btn-1c"><i className="fa-solid fa-chevron-left"></i></div>
//       <div className="r-btn btn-1d"><i className="fa-solid fa-chevron-right"></i></div>
//       <h3>{title}</h3>
//       <ul className="product-slide product-slide-2">
//         {products.map(product => (
//           <li key={product.id}>
//             <Link to={`/product/${product.id}`}>
//               <img src={product.image} alt={`Shop Item ${product.id}`} />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const ShopItemsSlider = () => {
//   return (
//     <>
//       <SlideSection title="Top Sellers in Books" products={topSellers} />
//       <SlideSection title="New Releases" products={newReleases} />
//       <SlideSection title="Best Rated" products={bestRated} />
//       <Cards2 />
//       <SlideSection title="Top Sellers in Electronics" products={kids} />
//       <SlideSection title="Top Sellers in Fashion" products={newtechReleases} />
//       <SlideSection title="Top Sellers in Home & Kitchen" products={bestRated} />
//     </>
//   );
// }

// export default ShopItemsSlider;