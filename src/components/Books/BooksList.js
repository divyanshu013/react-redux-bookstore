import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
            <strong>Rated</strong>&nbsp;
            <Rating icon="star" defaultRating={book.rating} maxRating={5} disabled />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <strong>Category:</strong> {book.category}<br />
          <Link to={`/books/${book.id}`}>
            <strong>Edit book</strong>
          </Link>
        </Card.Content>
      </Card>
    </div>
  ))
);

const BooksList = ({ books }) => (
  <div>
    <div className="books-list">
      {renderBooks(books)}
    </div>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BooksList;
