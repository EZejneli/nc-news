import React from 'react';
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
  return (
    <FiltersContainer>
      <Categories>
        <Button variant="contained">Football</Button>
        <Button variant="contained">Coding</Button>
        <Button variant="contained">Cooking</Button>
      </Categories>
      <SortBy variant="outlined">
        <InputLabel>Sort By</InputLabel>
        <Select label="Sort By">
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="votes">Votes</MenuItem>
        </Select>
      </SortBy>
    </FiltersContainer>
  );
};

export default Filters;
