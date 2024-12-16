import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import Header from './Header';
import Filters from './Filters';
import MainContent from './MainContent';
import Footer from './Footer';

const MainPage = () => {
  return (
    <Container maxWidth="lg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Grid container spacing={3} style={{ maxWidth: '1000px' }}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Filters />
        </Grid>
        <Grid item xs={12} style={{ margin: '0 auto', maxWidth: '800px' }}>
          <MainContent />
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}> 
          <Grid container spacing={3} style={{ maxWidth: '800px' }}>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" style={{ display: 'block', margin: '0 auto' }}>
            Load More
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
