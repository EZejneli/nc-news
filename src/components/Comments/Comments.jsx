import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import CommentCard from './CommentCard';
import CommentPopover from './CommentPopover';
import { fetchComments } from '../../services/api';

const Comments = ({ article_id, username }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchComments(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setIsLoading(false);
      });
  }, [article_id]);

  const handleNewComment = (newComment) => {
    setComments((currentComments) => [newComment, ...currentComments]);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isLoading) return <Typography>Loading comments...</Typography>;

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">
          Comments ({comments.length})
        </Typography>
        <Button
          variant="contained"
          startIcon={<CommentIcon />}
          onClick={handleClick}
        >
          Add Comment
        </Button>
      </Box>
      <Divider sx={{ mb: 2 }} />
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
      <CommentPopover
        anchorEl={anchorEl}
        handleClose={handleClose}
        articleId={article_id}
        onCommentPosted={handleNewComment}
        username={username} // Pass the username prop
      />
    </Box>
  );
};

export default Comments;
