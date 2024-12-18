import React, { useState } from 'react';
import Filters from '../components/Filters';
import Articles from '../components/Articles/Articles';

const HomePage = ({ username }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('created_at');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sortBy) => {
    setSortBy(sortBy);
  };

  return (
    <>
      <Filters onSelectCategory={handleSelectCategory} onSortChange={handleSortChange} />
      <Articles username={username} selectedCategory={selectedCategory} sortBy={sortBy} />
    </>
  );
};

export default HomePage;
