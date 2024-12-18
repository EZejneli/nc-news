import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import ArticlesList from './ArticlesList';
import Filters from '../Filters';
import { fetchArticles } from '../services/api';

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('created_at');

  useEffect(() => {
    fetchArticles(category, sortBy)
      .then((data) => {
        console.log('Fetched articles:', data.articles);
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, [category, sortBy]);

  if (articles.length === 0) {
    return <div>Loading...</div>;
  }

  const mainArticle = articles.reduce((prev, current) => (prev.votes > current.votes ? prev : current), articles[0]);
  console.log('Main article:', mainArticle);

  const handleFilteredArticles = () => {
    return articles.filter(article => article.article_id !== mainArticle.article_id);
  };

  return (
    <div>
      <Filters onSelectCategory={setCategory} onSortChange={setSortBy} />
      <ArticleCard
        image={mainArticle.article_img_url}
        title={mainArticle.title}
        author={mainArticle.author}
        votes={mainArticle.votes}
        date={new Date(mainArticle.created_at).toLocaleDateString()}
        size="large"
      />
      <ArticlesList articles={handleFilteredArticles()} />
    </div>
  );
};

export default ArticlesPage;
