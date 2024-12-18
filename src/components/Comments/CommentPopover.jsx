import React, { useState } from 'react';
import { Popover, Box, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { postComment } from '../../services/api';

const CommentPopover = ({ anchorEl, handleClose, articleId, onCommentPosted, username }) => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!comment.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const newComment = await postComment(articleId, username, comment);
      onCommentPosted(newComment);
      setComment('');
      handleClose();
    } catch (err) {
      setError('Failed to post comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Box sx={{ p: 2, width: 400 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <TextField
          autoFocus
          multiline
          rows={4}
          fullWidth
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          disabled={isSubmitting}
          sx={{ mb: 2 }}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={isSubmitting || !comment.trim()}
          fullWidth
        >
          {isSubmitting ? <CircularProgress size={24} /> : 'Post Comment'}
        </Button>
      </Box>
    </Popover>
  );
};

export default CommentPopover;