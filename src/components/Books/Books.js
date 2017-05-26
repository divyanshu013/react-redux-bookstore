import React from 'react';
import BookForm from './BookForm';
import VisibleBooksList from '../../containers/VisibleBooksList';

const Books = () => (
  <div>
    <BookForm />
    <VisibleBooksList />
  </div>
);

export default Books;
