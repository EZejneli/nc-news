import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ArticleCard from './ArticleCard';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://emir-ncnews.onrender.com/api/articles')
      .then((response) => response.json())
      .then((data) => {
        console.log('Articles response:', data);
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  return (
    <Grid container spacing={3}>
      {articles.map((article, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ArticleCard
            image={article.article_img_url}
            title={article.title}
            author={article.author}
            votes={article.votes}
            date={new Date(article.created_at).toLocaleDateString()}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticleList;
