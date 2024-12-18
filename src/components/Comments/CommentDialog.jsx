import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Alert, 
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { postComment } from '../../services/api';

const CommentForm = ({ articleId, onCommentPosted }) => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Hardcoded username for now - you might want to implement user authentication later
      const newComment = await postComment(articleId, 'jessjelly', comment);
      setComment('');
      setSuccess(true);
      onCommentPosted(newComment);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError('Failed to post comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        fullWidth
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
        disabled={isSubmitting}
        error={!!error}
        helperText={error}
        sx={{ mb: 2 }}
      />
      <Button 
        type="submit" 
        variant="contained" 
        disabled={isSubmitting || !comment.trim()}
        sx={{ mr: 2 }}
      >
        {isSubmitting ? <CircularProgress size={24} /> : 'Post Comment'}
      </Button>
      {success && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Comment posted successfully!
        </Alert>
      )}
    </Box>
  );
};

const CommentDialog = ({ open, onClose, articleId, onCommentPosted }) => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!comment.trim()) return;

    setIsSubmitting(true);
    try {
      const newComment = await postComment(articleId, 'jessjelly', comment);
      onCommentPosted(newComment);
      setComment('');
      onClose();
    } catch (err) {
      console.error('Failed to post comment:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Add a Comment</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          multiline
          rows={4}
          fullWidth
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          disabled={isSubmitting}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={isSubmitting || !comment.trim()}
        >
          {isSubmitting ? <CircularProgress size={24} /> : 'Post Comment'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CommentForm;
export { CommentDialog };
