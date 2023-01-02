import React, { useState, useEffect } from 'react';
import SearchBook from './components/SearchBook';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import { getAll } from './BooksAPI';

function App() {
  const [bookShelf, setBookShelf] = useState([]);
  useEffect(() => {
    let mounted = true;
    getAll().then((res) => mounted && setBookShelf(res));
    return () => {
      mounted = false;
    };
  });
  return (
    <div className="app">
      <Routes>
        <Route path="/" index element={<HomePage bookShelf={bookShelf} />}></Route>
        <Route path="/search" element={<SearchBook bookShelf={bookShelf} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
