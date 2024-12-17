import React from 'react';
import { Grid } from '@mui/material';
import ArticleCard from './ArticleCard';

const ArticlesList = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return (
      <Grid item xs={12}>
        No articles found
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <Grid item xs={12} sm={6} md={4} key={article.article_id}>
          <ArticleCard
            image={article.article_img_url}
            title={article.title}
            author={article.author}
            votes={article.votes}
            date={new Date(article.created_at).toLocaleDateString()}
            size="small"
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticlesList;
