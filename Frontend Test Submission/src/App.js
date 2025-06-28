import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Paper } from '@mui/material';
import UrlShortenerPage from './pages/UrlShortenerPage';
import StatisticsPage from './pages/StatisticsPage';
import RedirectHandler from './pages/RedirectHandler';
import './App.css';

function App() {
  return (
    <Router>
      <AppBar position="static" color="transparent" elevation={0} sx={{ background: 'none', boxShadow: 'none', pt: 2 }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, color: '#fff', letterSpacing: 2 }}>
            MINIURL
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ color: '#fff', fontWeight: 600 }}>
            Shorten URL
          </Button>
          <Button color="inherit" component={Link} to="/stats" sx={{ color: '#fff', fontWeight: 600 }}>
            Statistics
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3, width: '100%', maxWidth: 500, bgcolor: 'rgba(255,255,255,0.97)', mx: 'auto', mt: 8 }}>
          <Routes>
            <Route path="/" element={<UrlShortenerPage />} />
            <Route path="/stats" element={<StatisticsPage />} />
            <Route path="/short/:code" element={<RedirectHandler />} />
          </Routes>
        </Paper>
      </Container>
      {/* Features Section at the bottom */}
      <Box sx={{ mt: 8, mb: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} md={2} textAlign="center">
            <Box>
              <span role="img" aria-label="Easy" style={{ fontSize: 40 }}>👍</span>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>Easy</Typography>
              <Typography variant="body2">ShortURL is easy and fast, enter the long link to get your shortened link</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2} textAlign="center">
            <Box>
              <span role="img" aria-label="Shortened" style={{ fontSize: 40 }}>🔗</span>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>Shortened</Typography>
              <Typography variant="body2">Use any link, no matter what size, ShortURL always shortens</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2} textAlign="center">
            <Box>
              <span role="img" aria-label="Secure" style={{ fontSize: 40 }}>🛡️</span>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>Secure</Typography>
              <Typography variant="body2">It is fast and secure, our service has HTTPS protocol and data encryption</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2} textAlign="center">
            <Box>
              <span role="img" aria-label="Statistics" style={{ fontSize: 40 }}>📊</span>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>Statistics</Typography>
              <Typography variant="body2">Check the number of clicks that your shortened URL received</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2} textAlign="center">
            <Box>
              <span role="img" aria-label="Reliable" style={{ fontSize: 40 }}>🤝</span>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>Reliable</Typography>
              <Typography variant="body2">All links that try to disseminate spam, viruses and malware are deleted</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={2} textAlign="center">
            <Box>
              <span role="img" aria-label="Devices" style={{ fontSize: 40 }}>💻</span>
              <Typography variant="h6" sx={{ mt: 1, fontWeight: 600 }}>Devices</Typography>
              <Typography variant="body2">Compatible with smartphones, tablets and desktop</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ py: 2, textAlign: 'center', color: '#fff', opacity: 0.8 }}>
        &copy; {new Date().getFullYear()} MINIURL &mdash; Powered by React & Material UI
      </Box>
    </Router>
  );
}

export default App;
