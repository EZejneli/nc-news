import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        cursor: 'pointer',
        '&:hover': { 
          transform: 'scale(1.02)', 
          transition: 'transform 0.2s',
          boxShadow: 3
        },
        backgroundColor: 'background.paper',
      }}
      onClick={() => navigate(`/articles/${article.article_id}`)}
      role="article"
      aria-label={`Article: ${article.title}`}
    >
      <CardMedia
        component="img"
        height="140"
        image={article.article_img_url}
        alt={article.title}
      />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="h2"
          color="text.primary"
          sx={{ fontWeight: 'bold' }}
        >
          {article.title}
        </Typography>
        <Box sx={{ color: 'text.secondary', fontSize: '0.875rem', mb: 1 }}>
          <Typography component="span" sx={{ fontWeight: 'medium' }}>
            By {article.author}
          </Typography>
          <Typography component="span" sx={{ mx: 1 }}>•</Typography>
          <Typography component="span">
            {new Date(article.created_at).toLocaleDateString()}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary' }}>
          <Typography variant="body2">
            Votes: {article.votes}
          </Typography>
          <Typography variant="body2">
            Comments: {article.comment_count}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
