import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import MainArticle from './MainArticle';

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://emir-ncnews.onrender.com/api/articles/${article_id}`)
      .then((res) => res.json())
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <Typography>Loading article...</Typography>;

  return (
    <Container maxWidth="lg">
      <MainArticle article={article} />
    </Container>
  );
};

export default SingleArticle;
