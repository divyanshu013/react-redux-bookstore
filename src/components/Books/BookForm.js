import React from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Button, Rating, Label } from 'semantic-ui-react';

const BookForm = ({ book, authors, handleSubmit, handleChange, loading, errors }) => (
  <div>
    <Header as="h2" attached="top">
      Add new book
    </Header>
    <Form className="attached fluid segment">
      <Form.Group widths="equal">
        <Form.Input
          label="Title" placeholder="Title" type="text" value={book.title}
          onChange={handleChange} name="title"
        />
        <Form.Select
          label="Author" value={book.authorId} onChange={handleChange}
          placeholder="Author" name="authorId"
          options={
            authors.map(author => ({
              text: `${author.firstName} ${author.lastName}`,
              key: author.id,
              value: author.id
            }))
          }
        />
        <Form.Input
          label="Category" placeholder="Category" type="text" value={book.category}
          onChange={handleChange} name="category"
        />
      </Form.Group>
      <Form.Input
        label="Image URL" placeholder="Image URL" type="text" value={book.image}
        onChange={handleChange} name="image"
      />
      <Label basic size="large">
        Rating
        <Label.Detail>
          <Rating icon="star" maxRating={5} defaultRating={book.rating} onRate={handleChange} name="rating" />
        </Label.Detail>
      </Label>
      <Button color="blue" floated="right" onClick={handleSubmit}>Add Book</Button>
    </Form>
  </div>
);


export default BookForm;
