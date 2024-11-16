import express from 'express';
import axios from 'axios';
import querystring from 'querystring';
import path from 'path';

const app = express();
const port = 5173;

// const {
//   SPOTIFY_CLIENT_ID,
//   SPOTIFY_CLIENT_SECRET,
//   SPOTIFY_REDIRECT_URI,
// } = process.env;

// Scopes your app needs (add more as needed)
const scopes = [
  'user-read-private',
  'playlist-read-private',
  'user-library-read',
];

app.use(express.static(path.resolve('dist')));


// Step 1: Redirect to Spotify Authorization Page
app.get('/login', (req, res) => {
  const queryParams = querystring.stringify({
    client_id: '23007b19701f4535906a202c2143a389',
    response_type: 'code',
    redirect_uri: 'http://localhost:5173',
    scope: scopes.join(' '),
    state: 'random_state_string', // Optional: Add a unique state to protect against CSRF
  });

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

// Step 2: Handle Callback and Get Authorization Code
app.get('/callback', async (req, res) => {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).send('Authorization code missing.');
  }

  try {
    // Step 3: Exchange Authorization Code for Access Token
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      querystring.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'http://localhost:5173/callback',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Buffer.from(
            `${'23007b19701f4535906a202c2143a389'}:${'b58bad3def8848ba869de642f2e0455c'}`
          ).toString('base64')}`,
        },
      }
    );
    
    const { access_token, refresh_token } = response.data;

    // Step 4: Fetch User Data
    const userProfile = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    
    res.send(`
      <h1>Logged in!</h1>
      <p>Welcome, ${userProfile.data.display_name}!</p>
      <p>Your Spotify ID: ${userProfile.data.id}</p>
      <p>Access Token: ${access_token}</p>
      <p>Refresh Token: ${refresh_token}</p>
      `);
    } catch (error) {
      console.error(error.response.data || error.message);
      res.status(500).send('Something went wrong.');
    }
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist', 'index.html'));
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  