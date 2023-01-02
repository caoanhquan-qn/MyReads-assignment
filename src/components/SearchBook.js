import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from './Book';

const SearchBook = () => {
  const [strInput, setStrInput] = useState('');
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setStrInput(e.target.value);
    search(e.target.value, 10).then((res) => {
      const formattedData = res?.map((book) => {
        return {
          ...book,
          style: {
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
          },
        };
      });
      setList(formattedData);
    });
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" value={strInput} onChange={handleChange} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {list?.map((book) => {
            return <Book key={book.id} book={book} status={book.shelf || 'none'} onSearchSelf={true} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default SearchBook;
