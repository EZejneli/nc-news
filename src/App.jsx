import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SingleArticlePage from './pages/SingleArticlePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="articles/:article_id" element={<SingleArticlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;