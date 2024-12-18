import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, Box, IconButton, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteComment } from '../../services/api';

const CommentCard = ({ comment, username, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError(null);

    try {
      await deleteComment(comment.comment_id);
      onDelete(comment.comment_id);
    } catch (err) {
      setError('Failed to delete comment. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar sx={{ mr: 2 }}>{comment.author[0]}</Avatar>
          <Typography variant="subtitle1">{comment.author}</Typography>
          <Typography variant="caption" sx={{ ml: 'auto' }}>
            {new Date(comment.created_at).toLocaleDateString()}
          </Typography>
        </Box>
        <Typography variant="body1">{comment.body}</Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
          Votes: {comment.votes}
        </Typography>
        {comment.author === username && (
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            <IconButton
              onClick={handleDelete}
              disabled={isDeleting}
              aria-label="delete comment"
            >
              {isDeleting ? <CircularProgress size={24} /> : <DeleteIcon />}
            </IconButton>
            {error && (
              <Typography variant="body2" color="error" sx={{ ml: 2 }}>
                {error}
              </Typography>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CommentCard;
