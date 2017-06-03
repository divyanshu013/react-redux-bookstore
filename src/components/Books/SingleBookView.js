import React from 'react';
import UpdateBookForm from '../../containers/BookFormContainers/UpdateBookForm';

const SingleBookView = ({ match }) => (
  <UpdateBookForm id={match.params.id} />
);

export default SingleBookView;
