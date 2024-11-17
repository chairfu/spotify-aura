import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';

const Callback = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    useEffect(() => {
      const query = new URLSearchParams(location.search);
      const accessToken = query.get('access_token');
  
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    }, [location, navigate]);
  
    return <div>Logging in...</div>;
  };

  export default Callback;
  