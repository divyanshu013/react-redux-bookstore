import React from 'react';

const renderBooks = books => (
  <ul>
    {
      books.map(book => (
        <li>{book}</li>
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

export default BooksList;
