import React from 'react';
import AddBook from '../components/AddBook';
import Header from '../components/Header';
import ListBooksContent from '../components/ListBooksContent';

const HomePage = ({ bookShelf }) => {
  return (
    <div className="list-books">
      <Header />
      <ListBooksContent bookShelf={bookShelf} />
      <AddBook />
    </div>
  );
};

export default HomePage;
