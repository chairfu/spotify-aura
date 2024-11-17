import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import AuraPage from './AuraPage';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Extract access token and refresh token from URL query parameters
    const query = new URLSearchParams(location.search);
    const token = query.get('access_token');

    if (token) {
      setAccessToken(token);

      // Store the tokens in localStorage or sessionStorage
      localStorage.setItem('accessToken', token);
    } else {
      // If tokens are missing, redirect back to login
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <AuraPage />
  );
};

export default Dashboard;
