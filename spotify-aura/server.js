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
  'user-top-read',
];

app.use(express.static(path.resolve('dist')));


// Step 1: Redirect to Spotify Authorization Page
app.get('/api/login', (req, res) => {
  const queryParams = querystring.stringify({
    client_id: '9c93acc23ff640dabf9154f9db451e75',
    response_type: 'code',
    redirect_uri: 'http://localhost:5173/callback',
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
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      querystring.stringify({
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'http://localhost:5173/callback',
        client_id: '9c93acc23ff640dabf9154f9db451e75',
        client_secret: 'e556bde3378e45c090967eac7f35a637',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token } = response.data;
    console.log("hello");
    res.redirect(`/dashboard?access_token=${access_token}`);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Token exchange failed.');
  }

  

});

app.get('/dashboard', (req, res) => {
  const { access_token } = req.query;

  if (!access_token) {
    console.log('Loading');
    return res.redirect('/login');
  }

  res.sendFile(path.resolve('dist', 'index.html'));

});

app.get('/api/top-artists', async (req, res) => {
  const accessToken = req.query.access_token; // Assume the token is passed as a query param

  try {
    const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      params: {
        limit: 1,
        offset: 0
      }
    });

    const genre = response.data.items[0].genres[0];

    if (genre) {
      res.json(genre); // Return the genre as a response
      console.log(genre);
    } else {
      res.status(404).json({ error: 'Genre not found for the top artist' });
    }

  } catch (error) {
    console.error('Error fetching top artists:', error);
    res.status(500).json({ error: 'Failed to fetch top artists' });
  }
});

  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist', 'index.html'));
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  