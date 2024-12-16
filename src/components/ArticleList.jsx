import React from 'react';
import { Grid } from '@mui/material';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles = [] }) => {
  return (
    <Grid container spacing={3}>
      {articles.map((article, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ArticleCard
            image={article.image}
            title={article.title}
            author={article.author}
            votes={article.votes}
            date={article.date}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticleList;
