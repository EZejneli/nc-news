import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box, Stack } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Comments from '../Comments/Comments';
import VoteButtons from './VoteButtons';

const MainArticle = ({ article, username }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Box role="article" aria-label={`Article: ${article.title}`}>
      <Card 
        sx={{ 
          mb: 4,
          cursor: isHomePage ? 'pointer' : 'default',
          '&:hover': isHomePage ? { 
            transform: 'scale(1.01)', 
            transition: 'transform 0.2s',
            boxShadow: 3
          } : {},
          backgroundColor: 'background.paper',
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
          <Typography 
            gutterBottom 
            variant="h3" 
            component="h1"
            color="text.primary"
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1.75rem', sm: '2.5rem' }
            }}
          >
            {article.title}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <Typography variant="body1" color="text.secondary">
              By {article.author} | {new Date(article.created_at).toLocaleDateString()}
            </Typography>
            <Stack direction="row" spacing={3} alignItems="center">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ThumbUpIcon color="action" />
                <Typography variant="body2">{article.votes}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CommentIcon color="action" />
                <Typography variant="body2">{article.comment_count}</Typography>
              </Box>
            </Stack>
          </Stack>
          {!isHomePage && (
            <Typography variant="body1" paragraph sx={{ mt: 2, mb: 3 }}>
              {article.body}
            </Typography>
          )}
          {!isHomePage && (
            <VoteButtons 
              articleId={article.article_id} 
              initialVotes={article.votes} 
            />
          )}
        </CardContent>
      </Card>
      {!isHomePage && <Comments article_id={article.article_id} username={username} />}
    </Box>
  );
};

export default MainArticle;
