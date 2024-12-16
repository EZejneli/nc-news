import React from 'react';
import { Box, Grid, Button, Typography, Paper } from '@mui/material';

const sampleArticles = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Sample Article 1',
    author: 'Author 1',
    votes: 10,
    date: '2023-10-01',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Sample Article 2',
    author: 'Author 2',
    votes: 20,
    date: '2023-10-02',
  },
];

const MainContent = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h4">Main Article</Typography>
            <img src="https://via.placeholder.com/600x400" alt="Main Article" style={{ width: '100%', height: 'auto' }} />
            <Typography variant="body1">This is the main article content...</Typography>
            <Typography variant="body2">Votes: 30</Typography>
            <Typography variant="body2">Author: Main Author</Typography>
            <Typography variant="body2">Created: 2023-10-01</Typography>
          </Paper>
        </Grid>
        {sampleArticles.map((article, index) => (
          <Grid item xs={6} sm={6} key={index}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h5">{article.title}</Typography>
              <img src={article.image} alt={article.title} style={{ width: '100%', height: 'auto' }} />
              <Typography variant="body1">This is the sample article content...</Typography>
              <Typography variant="body2">Votes: {article.votes}</Typography>
              <Typography variant="body2">Author: {article.author}</Typography>
              <Typography variant="body2">Created: {article.date}</Typography>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Article Title</Typography>
            <Typography variant="body2">Votes: 10</Typography>
            <Typography variant="body2">Author: John Doe</Typography>
            <Typography variant="body2">Created: 2023-10-01</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Article Title</Typography>
            <Typography variant="body2">Votes: 8</Typography>
            <Typography variant="body2">Author: Jane Smith</Typography>
            <Typography variant="body2">Created: 2023-10-02</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Article Title</Typography>
            <Typography variant="body2">Votes: 15</Typography>
            <Typography variant="body2">Author: Alice Johnson</Typography>
            <Typography variant="body2">Created: 2023-10-03</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button variant="contained">Load More</Button>
      </Box>
    </Box>
  );
};

export default MainContent;
