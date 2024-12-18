import React from 'react';
import Filters from '../components/Filters';
import Articles from '../components/Articles/Articles';

const HomePage = ({ username }) => {
  return (
    <>
      <Filters />
      <Articles username={username} />
    </>
  );
};

export default HomePage;
