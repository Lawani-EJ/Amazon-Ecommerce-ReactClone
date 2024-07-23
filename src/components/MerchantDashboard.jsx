import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MerchantDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    image: ''
  });

  const merchantId = '111'; 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${merchantId}`)
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, [merchantId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://ecommerce.reworkstaging.name.ng/v2/categories', { ...formData, merchant_id: merchantId })
      .then(response => {
        setCategories([...categories, response.data]);
        setFormData({ name: '', image: '' });
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to add category. Please try again later.');
      });
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Merchant Dashboard</h1>

      <div className="mb-4">
        <h2 className="h4">Add New Category</h2>
        <form onSubmit={handleSubmit} className="form-inline">
          <div className="form-group mb-2">
            <label htmlFor="name" className="sr-only">Category Name</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Category Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="image" className="sr-only">Category Image URL</label>
            <input type="text" className="form-control" id="image" name="image" placeholder="Category Image URL" value={formData.image} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Add Category</button>
        </form>
      </div>

      <div className="row">
        {categories.map(category => (
          <div key={category.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={category.image} className="card-img-top" alt={category.name} />
              <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
              </div>
              <div className="card-footer">
                <button className="btn btn-danger" onClick={() => handleDelete(category.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  function handleDelete(categoryId) {
    axios.delete(`http://ecommerce.reworkstaging.name.ng/v2/categories/${categoryId}`)
      .then(() => {
        setCategories(categories.filter(category => category.id !== categoryId));
      })
      .catch(error => console.error(error));
  }
};

export default MerchantDashboard;
