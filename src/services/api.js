const BASE_URL = 'https://emir-ncnews.onrender.com/api';

export const fetchArticles = async () => {
  const response = await fetch(`${BASE_URL}/articles`);
  if (!response.ok) throw new Error('Failed to fetch articles');
  const data = await response.json();
  return data.articles;
};

export const fetchArticleById = async (id) => {
  const response = await fetch(`${BASE_URL}/articles/${id}`);
  if (!response.ok) throw new Error('Article not found');
  const data = await response.json();
  return data.article;
};

export const fetchComments = async (articleId) => {
  const response = await fetch(`${BASE_URL}/articles/${articleId}/comments`);
  if (!response.ok) throw new Error('Failed to fetch comments');
  const data = await response.json();
  return data.comments;
};
