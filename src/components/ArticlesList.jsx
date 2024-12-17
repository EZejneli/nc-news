import React from 'react';
import { Grid } from '@mui/material';
import ArticleCard from './ArticleCard';

const ArticlesList = ({ articles }) => {
  return (
    <Grid container spacing={3}>
      {articles.slice(3).map((article, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ArticleCard
            title={article.title}
            author={article.author}
            votes={article.votes}
            date={article.created_at}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticlesList;
