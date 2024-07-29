import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoriesList = ({ merchantId }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${merchantId}`)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [merchantId]);

  const handleDelete = (categoryId) => {
    axios.delete(`http://ecommerce.reworkstaging.name.ng/v2/categories/${categoryId}`)
      .then(response => {
        setCategories(categories.filter(category => category.id !== categoryId));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Categories</h2>
      <Link to="/categories/new" className="btn btn-success mb-3">Add New Category</Link>
      <ul className="list-group">
        {categories.map(category => (
          <li key={category.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{category.name}</h5>
              <img src={category.image} alt={category.name} style={{ width: '50px', height: '50px' }} />
            </div>
            <div>
              <Link to={`/categories/edit/${category.id}`} className="btn btn-warning me-2">Edit</Link>
              <button onClick={() => handleDelete(category.id)} className="btn btn-danger">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
