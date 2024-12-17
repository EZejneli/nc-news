import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import FeaturedArticle from './FeaturedArticle';
import ArticleCard from './ArticleCard';

const Top3Articles = () => {
  const [topArticles, setTopArticles] = useState([]);

  useEffect(() => {
    fetch('https://your-api-endpoint.com/api/articles?sort_by=votes&order=desc&limit=3')
      .then(response => response.json())
      .then(data => setTopArticles(data.articles))
      .catch(error => console.error('Error fetching top articles:', error));
  }, []);

  return (
    <Grid container spacing={3}>
      {topArticles.length > 0 && (
        <Grid item xs={12}>
          <FeaturedArticle
            image={topArticles[0].article_img_url}
            title={topArticles[0].title}
            author={topArticles[0].author}
            votes={topArticles[0].votes}
            date={topArticles[0].created_at}
          />
        </Grid>
      )}
      {topArticles.slice(1).map((article, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ArticleCard
            image={article.article_img_url}
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

export default Top3Articles;
