import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const MerchantDashboard = () => {
  const { merchantId } = useParams();
  const [merchantData, setMerchantData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMerchantData = async () => {
      try {
        const response = await axios.get(`http://ecommerce.reworkstaging.name.ng/v2/merchants/${merchantId}`);
        setMerchantData(response.data);
      } catch (error) {
        setError('Failed to fetch merchant data');
      } finally {
        setLoading(false);
      }
    };

    fetchMerchantData();
  }, [merchantId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#232f3e' }}>
        <div className="container">
          <Link className="navbar-brand" to="#">
            <i className="bi bi-list me-2"></i>
            <span>Amazon Merchant</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`/merchant-dashboard/${merchantId}`}>Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/merchant-dashboard/${merchantId}/products`}>Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/merchant-dashboard/${merchantId}/orders`}>Orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/merchant-dashboard/${merchantId}/settings`}>Settings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/categories?merchant_id=${merchantId}`}>Categories</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <main className="container py-5">
        <div className="row g-0 justify-content-center">
          <div className="col-lg-7">
            <div className="card shadow-sm rounded-lg border-0">
              <div className="card-body">
                <h1 className="h3 mb-3 fw-normal text-center">Merchant Dashboard</h1>
                <form>
                  {/* Merchant Data Display */}
                  <div className="mb-3">
                    <label htmlFor="merchantName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="merchantName" value={merchantData.name || ''} readOnly />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="merchantEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="merchantEmail" value={merchantData.email || ''} readOnly />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="merchantPhone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="merchantPhone" value={merchantData.phone || ''} readOnly />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="merchantAddress" className="form-label">Address</label>
                    <textarea className="form-control" id="merchantAddress" rows="3" value={merchantData.address || ''} readOnly></textarea>
                  </div>

                  {/* Optionally add more fields as needed */}
                  
                  <button type="button" className="btn btn-primary">Update Information</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MerchantDashboard;
