import React from 'react';
import AddBookForm from '../../containers/AddBookForm';
import BooksList from './BooksList';

const Books = () => (
  <div>
    <h1>Books</h1>
    <BooksList books={['Lord of the rings', 'Harry Potter', 'Artemis Fowl']} />
  </div>
);

export default Books;
