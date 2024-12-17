import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import Layout from './Layout';
import Content from './Content';

const MainPage = () => {
  return (
    <Container maxWidth="lg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Grid container spacing={3} style={{ maxWidth: '1000px' }}>
        <Grid item xs={12}>
          <Layout>
            <Content />
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button variant="contained" color="primary" style={{ display: 'block', margin: '0 auto' }}>
                Load More
              </Button>
            </Grid>
          </Layout>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
