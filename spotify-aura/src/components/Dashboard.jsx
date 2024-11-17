import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Extract access token and refresh token from URL query parameters
    const query = new URLSearchParams(location.search);
    const token = query.get('access_token');
    const refreshToken = query.get('refresh_token');

    if (token) {
      setAccessToken(token);

      // Store the tokens in localStorage or sessionStorage
      localStorage.setItem('accessToken', token);
      localStorage.setItem('refreshToken', refreshToken);

      // Optionally, remove tokens from the URL after storing them
      navigate('/dashboard', { replace: true });
    } else {
      // If tokens are missing, redirect back to login
      navigate('/');
    }
  }, [location, navigate]);

  return (
    <div>
      <h1>Welcome to your Dashboard!</h1>
      {accessToken ? (
        <p>You are logged in with Spotify!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
