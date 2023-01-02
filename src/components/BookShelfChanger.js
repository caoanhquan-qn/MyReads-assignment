import React, { useState } from 'react';
import optionObj from '../constants/options';
import { update } from '../BooksAPI';
import PropTypes from 'prop-types';

const BookShelfChanger = ({ book, status }) => {
  const [selectedValue, setSelectedValue] = useState(status);
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    update(book, e.target.value);
  };
  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} value={selectedValue}>
        <option disabled>Move to...</option>
        {optionObj.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  book: PropTypes.object,
  status: PropTypes.string,
};

export default BookShelfChanger;
