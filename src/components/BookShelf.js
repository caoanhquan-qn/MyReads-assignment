import React from 'react';
import Book from './Book';
const BookShelf = ({ shelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.status}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelf?.books?.map((book) => {
            return <Book book={book} key={book.title} status={shelf.value} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
