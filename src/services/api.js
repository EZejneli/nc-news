const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://emir-ncnews.onrender.com/api';

export const fetchArticles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/articles`);
    if (!response.ok) throw new Error('Failed to fetch articles');
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const fetchArticleById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/articles/${id}`);
    if (!response.ok) throw new Error('Article not found');
    const data = await response.json();
    return data.article;
  } catch (error) {
    console.error(`Error fetching article with id ${id}:`, error);
    throw error;
  }
};

export const fetchComments = async (articleId) => {
  try {
    const response = await fetch(`${BASE_URL}/articles/${articleId}/comments`);
    if (!response.ok) throw new Error('Failed to fetch comments');
    const data = await response.json();
    return data.comments;
  } catch (error) {
    console.error(`Error fetching comments for article with id ${articleId}:`, error);
    throw error;
  }
};
