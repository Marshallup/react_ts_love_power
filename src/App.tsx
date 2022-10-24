import React from 'react';
import { Routes, Route } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import IndexPage from './pages/IndexPage';
import MenuPage from './pages/MenuPage';
import TrendingPage from './pages/TrendingPage';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MenuPage />} />
      <Route path={'/index'} element={<DefaultLayout><IndexPage /></DefaultLayout>} />
      <Route path={'trending'} element={<DefaultLayout hasPaddingTop><TrendingPage /></DefaultLayout>} />
    </Routes>
  );
}

export default App;
