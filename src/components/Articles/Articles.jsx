import React, { useState, useEffect, memo } from 'react';
import MainArticle from './MainArticle';
import ArticleCard from './ArticleCard';
import { Grid, Typography } from '@mui/material';
import { fetchArticles, fetchArticlesByTopic, fetchTopics } from '../../services/api';

const Articles = memo(({ username, selectedCategory, sortBy }) => {
  const [articles, setArticles] = useState([]);
  const [mainArticle, setMainArticle] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);
  const [topicDescription, setTopicDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let articles;
        if (selectedCategory && selectedCategory !== 'all') {
          articles = await fetchArticlesByTopic(selectedCategory, sortBy);
          const topics = await fetchTopics();
          const topic = topics.find(topic => topic.slug === selectedCategory);
          setTopicDescription(topic ? topic.description : '');
        } else {
          articles = await fetchArticles();
          setTopicDescription('');
        }
        const sortedArticles = [...articles].sort((a, b) => b[sortBy] - a[sortBy]);
        setMainArticle(sortedArticles[0]);
        setOtherArticles(sortedArticles.slice(1));
        setArticles(articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, [selectedCategory, sortBy]);

  if (!mainArticle) return <div>Loading...</div>;

  return (
    <div className="articles-container">
      {topicDescription && (
        <Typography variant="h6" sx={{ mb: 2 }}>
          {topicDescription}
        </Typography>
      )}
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
