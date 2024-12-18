import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const CommentCard = ({ comment }) => {
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
      </CardContent>
    </Card>
  );
};

export default CommentCard;
