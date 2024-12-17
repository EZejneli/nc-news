import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MainArticle = ({ image, title, author, votes, date }) => {
  return (
    <Card>
      <CardMedia component="img" height="300" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          By {author}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Votes: {votes}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MainArticle;
