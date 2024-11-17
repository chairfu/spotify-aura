import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import AuraPage from './AuraPage';
import axios from 'axios';
import DynamicGradient from './gradient';

const genres = new Map([

  ["Indie", "#81b14f"],
  ["Rock",  "#c4bd8b"],
  ["pixel", "#9f543e"],

])

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(null);
  const [genre, setGenre] = useState("");

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

  useEffect(() => {

    if (!accessToken) return;

    axios.get('/api/top-artists', { params: { access_token: accessToken } })
      .then((response) => {
        setGenre(response.data); // Assuming API response is a string (the genre)
      })
      .catch((error) => {
        console.error('Problem getting genres:', error);
      });
  }, [accessToken])


  return (
    <>
      <AuraPage color2={genres.get(genre)}/>
    </>
  );
};

export default Dashboard;
