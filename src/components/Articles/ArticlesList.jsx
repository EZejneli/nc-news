import React from 'react';
import ArticleCard from './ArticleCard';

const ArticlesList = ({ articles }) => {
  return (
    <div>
      {articles.slice(1).map((article, index) => (
        <ArticleCard
          key={index}
          image={article.image}
          title={article.title}
          author={article.author}
          votes={article.votes}
          date={article.date}
        />
      ))}
    </div>
  );
};

export default ArticlesList;
