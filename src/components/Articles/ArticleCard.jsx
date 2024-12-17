import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ArticleCard = ({ image, title, author, votes, date }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Votes: {votes}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
