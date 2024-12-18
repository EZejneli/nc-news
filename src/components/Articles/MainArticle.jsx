import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Comments from '../Comments/Comments';

const MainArticle = ({ article }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Box>
      <Card 
        sx={{ 
          mb: 4,
          cursor: isHomePage ? 'pointer' : 'default',
          '&:hover': isHomePage ? { transform: 'scale(1.01)', transition: 'transform 0.2s' } : {}
        }}
        onClick={isHomePage ? () => navigate(`/articles/${article.article_id}`) : undefined}
      >
        <CardMedia
          component="img"
          height="400"
          image={article.article_img_url}
          alt={article.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {article.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            By {article.author} | {new Date(article.created_at).toLocaleDateString()} | {article.votes} votes
          </Typography>
        </CardContent>
      </Card>
      {!isHomePage && <Comments article_id={article.article_id} />}
    </Box>
  );
};

export default MainArticle;
