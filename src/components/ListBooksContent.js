import React from 'react';
import BookShelf from './BookShelf';
import optionObj from '../constants/options';
import PropTypes from 'prop-types';

const ListBooksContent = ({ bookShelf }) => {
  const bookShelfData = optionObj
    .filter((option) => option.value !== 'none')
    .map((option) => {
      return {
        status: option.title,
        value: option.value,
        books: bookShelf
          .filter((book) => book.shelf === option.value)
          .map((book) => {
            return {
              ...book,
              style: {
                width: 128,
                height: 193,
                backgroundImage: `url(${book?.imageLinks?.smallThumbnail})`,
              },
            };
          }),
      };
    });

  return (
    <div className="list-books-content">
      <div>
        {bookShelfData.map((shelf) => {
          return <BookShelf shelf={shelf} key={shelf.status} />;
        })}
      </div>
    </div>
  );
};

ListBooksContent.propTypes = {
  bookShelf: PropTypes.array,
};

export default ListBooksContent;
