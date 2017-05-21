import React from 'react';
import AddBookForm from '../../containers/AddBookForm';
import VisibleBooksList from '../../containers/VisibleBooksList';

const Books = () => (
  <div>
    <h1>Books</h1>
    <AddBookForm />
    <VisibleBooksList />
  </div>
);

export default Books;
