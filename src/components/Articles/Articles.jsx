import React, { useState, useEffect, memo } from 'react';
import MainArticle from './MainArticle';
import ArticleCard from './ArticleCard';
import { Grid } from '@mui/material';

const Articles = memo(({ username }) => {
  const [articles, setArticles] = useState([]);
  const [mainArticle, setMainArticle] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);

  useEffect(() => {
    fetch('https://emir-ncnews.onrender.com/api/articles')
      .then((res) => res.json())
      .then(({ articles }) => {
        const sortedArticles = [...articles].sort((a, b) => b.votes - a.votes);
        setMainArticle(sortedArticles[0]);
        setOtherArticles(sortedArticles.slice(1));
        setArticles(articles);
      });
  }, []);

  if (!mainArticle) return <div>Loading...</div>;

  return (
    <div className="articles-container">
      <MainArticle article={mainArticle} username={username} />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {otherArticles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.article_id}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
});

export default Articles;
