import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MainArticle = ({ article }) => {
  return (
    <Card>
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
  );
};

export default MainArticle;
