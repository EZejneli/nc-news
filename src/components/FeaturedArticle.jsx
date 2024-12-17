import React from 'react';
import { Card, CardMedia } from '@mui/material';
import ArticleInfo from './ArticleInfo';

const FeaturedArticle = ({ image, title, author, votes, date }) => {
  return (
    <Card>
      <CardMedia component="img" height="300" image={image} alt={title} />
      <ArticleInfo 
        title={title} 
        author={author} 
        votes={votes} 
        date={date} 
        titleVariant="h4" 
        authorVariant="body1" 
      />
    </Card>
  );
};

export default FeaturedArticle;
