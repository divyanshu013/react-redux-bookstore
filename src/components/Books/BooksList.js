import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const renderBooks = books => (
  books.map((book, index) => (
    <div key={index} className="book-item">
      <Card>
        <Image src={book.image} />
        <Card.Content>
          <Card.Header>
            {book.title}
          </Card.Header>
          <Card.Meta>
            {book.authorId}
          </Card.Meta>
          <Card.Description>
            Rated <strong>{book.rating} stars!</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <strong>Category:</strong> {book.category}
        </Card.Content>
      </Card>
    </div>
  ))
);

const BooksList = ({ books }) => (
  <div>
    <hr />
    <h2>BooksList</h2>
    <div className="books-list">
      {renderBooks(books)}
    </div>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BooksList;
