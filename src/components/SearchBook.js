import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI';
import Book from './Book';
import useDebounce from '../hooks/useDebounce';

const SearchBook = ({ bookShelf }) => {
  const [strInput, setStrInput] = useState('');
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setStrInput(e.target.value);
  };
  const debouncedValue = useDebounce(strInput, 500);
  useEffect(() => {
    if (debouncedValue === '') {
      setList([]);
    } else {
      search(debouncedValue, 10)
        .then((res) => {
          const formattedData = res?.map((book) => {
            const foundBook = bookShelf.find((b) => b.id === book.id);
            if (foundBook) {
              return {
                ...foundBook,
                style: {
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${foundBook?.imageLinks?.smallThumbnail})`,
                },
              };
            }
            return {
              ...book,
              style: {
                width: 128,
                height: 193,
                backgroundImage: `url(${book?.imageLinks?.smallThumbnail})`,
              },
            };
          });
          setList(formattedData);
        })
        .catch((err) => {
          console.log(err);
          setList([]);
        });
    }
  }, [debouncedValue]);

  return (
    <form className="search-books">
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
            return <Book key={book.id} book={book} status={book.shelf || 'none'} />;
          })}
        </ol>
      </div>
    </form>
  );
};

export default SearchBook;
