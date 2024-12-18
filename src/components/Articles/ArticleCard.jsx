import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        cursor: 'pointer',
        '&:hover': { transform: 'scale(1.02)', transition: 'transform 0.2s' }
      }}
      onClick={() => navigate(`/articles/${article.article_id}`)}
    >
      <CardMedia
        component="img"
        height="140"
        image={article.article_img_url}
        alt={article.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By {article.author} | {new Date(article.created_at).toLocaleDateString()} | {article.votes} votes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Comments: {article.comment_count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
