import React from 'react';
import SearchBook from './components/SearchBook';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" index element={<HomePage />}></Route>
        <Route path="/search" element={<SearchBook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
