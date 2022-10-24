import React from 'react';
import { Routes, Route } from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import CreateCollection from './pages/CreateCollection/CreateCollection';
import CreateNewItem from './pages/CreateNewItem';
import IndexPage from './pages/IndexPage';
import MenuPage from './pages/MenuPage';
import TrendingPage from './pages/TrendingPage';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MenuPage />} />
      <Route path={'/index'} element={<DefaultLayout><IndexPage /></DefaultLayout>} />
      <Route path={'/trending'} element={<DefaultLayout hasPaddingTop><TrendingPage /></DefaultLayout>} />
      <Route path={'/create-item'} element={<DefaultLayout hasPaddingTop exploreMenu><CreateNewItem /></DefaultLayout>} />
      <Route path={'/create-collection'} element={<DefaultLayout hasPaddingTop exploreMenu><CreateCollection /></DefaultLayout>} />
    </Routes>
  );
}

export default App;
