import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const FiltersContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const Categories = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const SortBy = styled(FormControl)(({ theme }) => ({
  minWidth: 200,
}));

const Filters = ({ onSortChange, onCategoryChange, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');

  useEffect(() => {
    fetch('https://emir-ncnews.onrender.com/api/topics')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.topics);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  const handleCategoryClick = (slug) => {
    onCategoryChange(slug === selectedCategory ? null : slug);
  };

  return (
    <FiltersContainer>
      <Categories>
        <Button 
          variant={!selectedCategory ? "contained" : "outlined"}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            variant={category.slug === selectedCategory ? "contained" : "outlined"}
            key={category.slug}
            onClick={() => handleCategoryClick(category.slug)}
          >
            {category.slug}
          </Button>
        ))}
      </Categories>
      <SortBy variant="outlined">
        <InputLabel>Sort By</InputLabel>
        <Select value={sortBy} onChange={handleSortChange} label="Sort By">
          <MenuItem value="created_at">Date</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
          <MenuItem value="comment_count">Comments</MenuItem>
        </Select>
      </SortBy>
    </FiltersContainer>
  );
};

export default Filters;
