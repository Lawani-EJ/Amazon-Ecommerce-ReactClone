import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryForm = ({ merchantId, categoryId, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: ''
  });

  useEffect(() => {
    if (categoryId) {
      axios.get(`http://ecommerce.reworkstaging.name.ng/v2/categories/${categoryId}`)
        .then(response => {
          setFormData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [categoryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = categoryId
      ? `http://ecommerce.reworkstaging.name.ng/v2/categories/${categoryId}`
      : 'http://ecommerce.reworkstaging.name.ng/v2/categories';
    const method = categoryId ? 'put' : 'post';
    const data = { ...formData, merchant_id: merchantId };

    axios[method](url, data)
      .then(response => {
        onSuccess(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Category Name</label>
        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image URL</label>
        <input type="url" className="form-control" id="image" name="image" value={formData.image} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">{categoryId ? 'Update Category' : 'Add Category'}</button>
    </form>
  );
};

export default CategoryForm;
