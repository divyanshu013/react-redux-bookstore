import React from 'react';
import PropTypes from 'prop-types';

const renderBooks = books => (
  <ul>
    {
      books.map((book, index) => (
        <li key={index}>{book}</li>
      ))
    }
  </ul>
);

const BooksList = ({ books }) => (
  <div>
    <hr />
    <h2>BooksList</h2>
    {renderBooks(books)}
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BooksList;
