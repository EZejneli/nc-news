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

const Filters = () => {
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetch('https://emir-ncnews.onrender.com/api/topics')
      .then((response) => response.json())
      .then((data) => {
        console.log('Categories response:', data);
        setCategories(data.topics);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <FiltersContainer>
      <Categories>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category, index) => (
            <Button variant="contained" key={index}>{category.slug}</Button>
          ))
        ) : (
          <Button variant="contained" disabled>No categories available</Button>
        )}
      </Categories>
      <SortBy variant="outlined">
        <InputLabel>Sort By</InputLabel>
        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)} label="Sort By">
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
        </Select>
      </SortBy>
    </FiltersContainer>
  );
};

export default Filters;
