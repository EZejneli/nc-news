import React, { useEffect, useState } from 'react';
import FeaturedArticle from '../FeaturedArticle';
import ArticlesList from './ArticlesList';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://emir-ncnews.onrender.com/api/articles')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, []);

  if (articles.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <FeaturedArticle
        image={articles[0].image}
        title={articles[0].title}
        author={articles[0].author}
        votes={articles[0].votes}
        date={articles[0].date}
      />
      <ArticlesList articles={articles} />
    </div>
  );
};

export default ArticlesPage;
