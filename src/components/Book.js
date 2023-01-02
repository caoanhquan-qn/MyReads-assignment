import React from 'react';
import BookShelfChanger from './BookShelfChanger';
const Book = ({ book, status }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={book.style}></div>
          <BookShelfChanger book={book} status={status} />
        </div>
        <div className="book-title">{book.title}</div>
        {book?.authors?.map((author) => {
          return (
            <div key={author} className="book-authors">
              {author}
            </div>
          );
        })}
      </div>
    </li>
  );
};

export default Book;
