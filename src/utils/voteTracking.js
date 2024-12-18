const VOTE_STORAGE_KEY = 'nc_news_votes';
const LAST_RESET_KEY = 'nc_news_last_reset';

export const getUserVoteForArticle = (articleId) => {
  const votes = JSON.parse(localStorage.getItem(VOTE_STORAGE_KEY) || '{}');
  return votes[articleId] || 0;
};

export const saveUserVote = (articleId, voteValue) => {
  const votes = JSON.parse(localStorage.getItem(VOTE_STORAGE_KEY) || '{}');
  votes[articleId] = voteValue;
  localStorage.setItem(VOTE_STORAGE_KEY, JSON.stringify(votes));
};

export const clearAllVotes = () => {
  localStorage.removeItem(VOTE_STORAGE_KEY);
  localStorage.setItem(LAST_RESET_KEY, Date.now().toString());
};
