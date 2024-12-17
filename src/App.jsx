import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import Filters from './components/Filters';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Container maxWidth="lg" sx={{ flexGrow: 1, mt: 2, px: 2 }}>
          <Routes>
            <Route path="/" element={<><Filters /><Articles /></>} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;