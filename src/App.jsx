import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Header from './components/Header';
import Filters from './components/Filters';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container maxWidth="lg" sx={{ flexGrow: 1, mt: 2, px: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Filters />
          </Grid>
          <Grid item xs={12}>
            <MainContent />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
