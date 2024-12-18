import React, { useState, useEffect } from 'react';
import { Button, Box, Alert, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { updateArticleVotes } from '../../services/api';
import { getUserVoteForArticle, saveUserVote } from '../../utils/voteTracking';

const VoteButtons = ({ articleId, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [error, setError] = useState(null);
  const [userVote, setUserVote] = useState(0);

  useEffect(() => {
    const savedVote = getUserVoteForArticle(articleId);
    setUserVote(savedVote);
  }, [articleId]);

  const handleVote = async (increment) => {
    if (userVote === increment) {
      // Undo vote
      const previousVote = userVote;
      setVotes((curr) => curr - increment);
      setUserVote(0);
      saveUserVote(articleId, 0);
      
      try {
        await updateArticleVotes(articleId, -increment);
      } catch (err) {
        setVotes((curr) => curr + increment);
        setUserVote(previousVote);
        saveUserVote(articleId, previousVote);
        setError('Failed to update vote. Please try again.');
      }
    } else {
      // New vote
      const previousVote = userVote;
      const change = increment - userVote;
      setVotes((curr) => curr + change);
      setUserVote(increment);
      saveUserVote(articleId, increment);

      try {
        await updateArticleVotes(articleId, change);
      } catch (err) {
        setVotes((curr) => curr - change);
        setUserVote(previousVote);
        saveUserVote(articleId, previousVote);
        setError('Failed to update vote. Please try again.');
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
      <Button
        variant={userVote === 1 ? "contained" : "outlined"}
        onClick={() => handleVote(1)}
        startIcon={<ThumbUpIcon />}
      >
        Upvote
      </Button>
      <Typography variant="h6">{votes}</Typography>
      <Button
        variant={userVote === -1 ? "contained" : "outlined"}
        onClick={() => handleVote(-1)}
        startIcon={<ThumbDownIcon />}
      >
        Downvote
      </Button>
      {error && (
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default VoteButtons;
