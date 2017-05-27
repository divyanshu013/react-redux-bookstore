import React from 'react';
import AddBookForm from '../../containers/BookFormContainers/AddBookForm';
import VisibleBooksList from '../../containers/VisibleBooksList';

const Books = () => (
  <div>
    <AddBookForm />
    <VisibleBooksList />
  </div>
);

export default Books;
