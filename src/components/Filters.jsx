import React, { useEffect, useState } from 'react';
import { Box, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { fetchTopics } from '../services/api';

const Filters = ({ onSelectCategory, onSortChange }) => {
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');

  useEffect(() => {
    fetchTopics()
      .then((fetchedTopics) => {
        setCategories(['all', ...fetchedTopics.map(topic => topic.slug)]);
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    onSortChange(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
      {categories.map((category) => (
        <Button
          key={category}
          variant="contained"
          onClick={() => onSelectCategory(category)}
          sx={{ mx: 1 }}
        >
          {category}
        </Button>
      ))}
      <FormControl sx={{ ml: 2 }}>
        <InputLabel>Sort By</InputLabel>
        <Select value={sortBy} onChange={handleSortChange}>
          <MenuItem value="created_at">Date</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
