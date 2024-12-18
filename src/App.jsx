import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SingleArticlePage from './pages/SingleArticlePage';

const App = () => {
  const username = 'jessjelly'; // Hardcoded for now, replace with dynamic username later

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage username={username} />} />
          <Route path="articles/:article_id" element={<SingleArticlePage username={username} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;