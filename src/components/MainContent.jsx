import React, { useEffect, useState } from 'react';
import { Box, Grid, Button, Typography, Paper } from '@mui/material';
import ArticleList from './Articles/ArticlesList';

const MainContent = () => {
  const [mainArticle, setMainArticle] = useState(null);
  const [sampleArticles, setSampleArticles] = useState([]);

  useEffect(() => {
    fetch('https://emir-ncnews.onrender.com/api/articles?sort_by=votes&order=desc&limit=1')
      .then((response) => response.json())
      .then((data) => {
        console.log('Main article response:', data);
        setMainArticle(data.articles[0]);
      })
      .catch((error) => {
        console.error('Error fetching main article:', error);
      });

    fetch('https://emir-ncnews.onrender.com/api/articles?sort_by=votes&order=desc&limit=2&offset=1')
      .then((response) => response.json())
      .then((data) => {
        console.log('Sample articles response:', data);
        setSampleArticles(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching sample articles:', error);
      });
  }, []);

  return (
    <Box>
      <Grid container spacing={3}>
        {mainArticle && (
          <Grid item xs={12}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h4">{mainArticle.title}</Typography>
              <img src={mainArticle.article_img_url} alt="Main Article" style={{ width: '100%', height: 'auto' }} />
              <Typography variant="body1">{mainArticle.body}</Typography>
              <Typography variant="body2">Votes: {mainArticle.votes}</Typography>
              <Typography variant="body2">Author: {mainArticle.author}</Typography>
              <Typography variant="body2">Created: {mainArticle.created_at}</Typography>
            </Paper>
          </Grid>
        )}
        {sampleArticles.map((article, index) => (
          <Grid item xs={6} sm={6} key={index}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h5">{article.title}</Typography>
              <img src={article.article_img_url} alt={article.title} style={{ width: '100%', height: 'auto' }} />
              <Typography variant="body1">{article.body}</Typography>
              <Typography variant="body2">Votes: {article.votes}</Typography>
              <Typography variant="body2">Author: {article.author}</Typography>
              <Typography variant="body2">Created: {article.created_at}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button variant="contained">Load More</Button>
      </Box>
    </Box>
  );
};

export default MainContent;
