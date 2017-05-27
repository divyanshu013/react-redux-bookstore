import React from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Button, Rating, Label } from 'semantic-ui-react';

const BookForm = ({ book, authors, onSave, onChange, loading, errors }) => (
  <div>
    <Header as="h2" attached="top">
      Add new book
    </Header>
    <Form className="attached fluid segment">
      <Form.Group widths="equal">
        <Form.Input label="Title" placeholder="Title" type="text" />
        <Form.Select
          label="Author" placeholder="Author" options={
            authors.map(author => ({
              text: `${author.firstName} ${author.lastName}`,
              key: author.id,
              value: author.id
            }))
          }
        />
        <Form.Input label="Category" placeholder="Category" type="text" />
      </Form.Group>
      <Form.Input label="Image URL" placeholder="Image URL" type="text" />
      <Label basic size="large">
        Rating
        <Label.Detail>
          <Rating icon="star" maxRating={5} />
        </Label.Detail>
      </Label>
      <Button color="blue" floated="right">Add Book</Button>
    </Form>
  </div>
);

BookForm.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    id: PropTypes.string
  })).isRequired
};

export default BookForm;
