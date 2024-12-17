import React from 'react';
import { Card, CardMedia } from '@mui/material';
import ArticleInfo from './ArticleInfo';

const ArticleCard = ({ image, title, author, votes, date }) => {
  return (
    <Card>
      {image && <CardMedia component="img" height="140" image={image} alt={title} />}
      <ArticleInfo 
        title={title} 
        author={author} 
        votes={votes} 
        date={date} 
        titleVariant="h5" 
        authorVariant="body2" 
      />
    </Card>
  );
};

export default ArticleCard;
