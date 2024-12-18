const API_URL = 'https://emir-ncnews.onrender.com/api';

export const fetchTopics = () => {
  return fetch(`${API_URL}/topics`).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch topics');
    }
    return response.json();
  });
};

export const fetchArticles = (category, sortBy) => {
  const url = new URL(`${API_URL}/articles`);
  if (category !== 'all') {
    url.searchParams.append('topic', category);
  }
  url.searchParams.append('sort_by', sortBy);

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    return response.json();
  });
};

export const fetchArticleById = async (id) => {
  const response = await fetch(`${API_URL}/articles/${id}`);
  if (!response.ok) throw new Error('Article not found');
  const data = await response.json();
  return data.article;
};

export const fetchComments = async (articleId) => {
  const response = await fetch(`${API_URL}/articles/${articleId}/comments`);
  if (!response.ok) throw new Error('Failed to fetch comments');
  const data = await response.json();
  return data.comments;
};

export const updateArticleVotes = async (articleId, increment) => {
  const response = await fetch(`${API_URL}/articles/${articleId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inc_votes: increment }),
  });
  if (!response.ok) throw new Error('Failed to update votes');
  const data = await response.json();
  return data.article;
};

export const postComment = async (articleId, username, body) => {
  const response = await fetch(`${BASE_URL}/articles/${articleId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, body }),
  });
  if (!response.ok) throw new Error('Failed to post comment');
  const data = await response.json();
  return data.comment;
};

export const deleteComment = async (commentId) => {
  const response = await fetch(`${BASE_URL}/comments/${commentId}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete comment');
};

export const fetchArticlesByTopic = async (topic, sortBy = 'created_at', order = 'desc') => {
  const response = await fetch(`${BASE_URL}/articles?topic=${topic}&sort_by=${sortBy}&order=${order}`);
  if (!response.ok) throw new Error('Failed to fetch articles by topic');
  const data = await response.json();
  return data.articles;
};

export const fetchTopics = async () => {
  const response = await fetch(`${BASE_URL}/topics`);
  if (!response.ok) throw new Error('Failed to fetch topics');
  const data = await response.json();
  return data.topics;
};
