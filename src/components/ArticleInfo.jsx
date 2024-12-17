import React from 'react';
import { CardContent, Typography } from '@mui/material';

const ArticleInfo = ({ title, author, votes, date, titleVariant, authorVariant }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant={titleVariant} component="div">
        {title}
      </Typography>
      <Typography variant={authorVariant} color="text.secondary">
        By {author}
      </Typography>
      <Typography variant={authorVariant} color="text.secondary">
        Votes: {votes}
      </Typography>
      <Typography variant={authorVariant} color="text.secondary">
        {date}
      </Typography>
    </CardContent>
  );
};

export default ArticleInfo;
