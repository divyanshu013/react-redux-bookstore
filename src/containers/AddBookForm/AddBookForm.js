import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../../actions';

const AddBookForm = ({ dispatch }) => {
  let input;

  return (
    <div>
      <h2>Add Books</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const book = input.value.trim();
          if (book) {
            dispatch(addBook(book));
            input.value = '';
          }
        }}
      >
        <input
          ref={node => (
            input = node
          )}
        />
        <input
          type="submit"
          value="Save"
        />
      </form>
    </div>
  );
};

AddBookForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddBookForm);
