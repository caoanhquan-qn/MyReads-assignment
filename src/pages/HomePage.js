import React, { useState, useEffect } from 'react';
import AddBook from '../components/AddBook';
import Header from '../components/Header';
import ListBooksContent from '../components/ListBooksContent';
import { getAll } from '../BooksAPI';

const HomePage = () => {
  const [bookShelf, setBookShelf] = useState([]);
  useEffect(() => {
    getAll().then((res) => setBookShelf(res));
  });

  return (
    <div className="list-books">
      <Header />
      <ListBooksContent bookShelf={bookShelf} />
      <AddBook />
    </div>
  );
};

export default HomePage;
