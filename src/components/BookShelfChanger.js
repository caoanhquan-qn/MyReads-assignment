import React, { useState } from 'react';
import optionObj from '../constants/options';
import { update } from '../BooksAPI';

const BookShelfChanger = ({ book, status, onSearchSelf }) => {
  const [selectedValue, setSelectedValue] = useState(status);
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    update(book, e.target.value);
  };
  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} value={selectedValue}>
        <option value="none" disabled>
          Move to...
        </option>
        {onSearchSelf
          ? optionObj
              .filter((option) => option.value !== 'none')
              .map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.title}
                  </option>
                );
              })
          : optionObj.map((option) => {
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

export default BookShelfChanger;
