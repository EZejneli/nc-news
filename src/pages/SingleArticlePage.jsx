import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainArticle from '../components/Articles/MainArticle';
import { fetchArticleById } from '../services/api';

const SingleArticlePage = ({ username }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        console.error('Error fetching article:', error);
      });
  }, [article_id]);

  if (!article) return <div>Loading...</div>;

  return <MainArticle article={article} username={username} />;
};

export default SingleArticlePage;
