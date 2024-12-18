import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import CommentCard from './CommentCard';

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://emir-ncnews.onrender.com/api/articles/${article_id}/comments`)
      .then((res) => res.json())
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <Typography>Loading comments...</Typography>;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Comments ({comments.length})
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {comments.length === 0 ? (
        <Typography>No comments yet.</Typography>
      ) : (
        comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      )}
    </Box>
  );
};

export default Comments;
