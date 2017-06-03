import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Segment, Image } from 'semantic-ui-react';

import BookForm from '../../components/Books/BookForm';
import { saveBook } from '../../actions';

const getBookById = (books, bookId) => (
  books.find(book => book.id === bookId)
);

const mapStateToProps = (state, ownProps) => {
  const bookId = ownProps.id;
  let book = {};
  if (state.books.length > 0) {
    book = getBookById(state.books, bookId);
  }
  return {
    authors: state.authors,
    book
  };
};

const mapDispatchToProps = dispatch => ({
  saveBook: book => dispatch(saveBook(book))
});

class UpdateBookFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.book.id !== nextProps.book.id) {
      this.setState({
        book: { ...nextProps.book }
      });
    }
  }

  handleChange(event, data) {
    const value = data.value || data.rating;
    const name = data.name;

    const book = { ...this.state.book };
    book[name] = value;

    this.setState({
      book
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveBook(this.state.book);
    this.context.router.history.push('/books');
  }

  render() {
    return (
      <Segment.Group horizontal>
        <Segment>
          <Image src={this.state.book.image} shape="rounded" />
        </Segment>
        <Segment>
          <BookForm
            book={this.state.book} handleChange={this.handleChange} handleSubmit={this.handleSubmit}
            authors={this.props.authors} header={`Update ${this.state.book.title}`}
          />
        </Segment>
      </Segment.Group>
    );
  }
}

UpdateBookFormComponent.propTypes = {
  saveBook: PropTypes.func.isRequired,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired
};

UpdateBookFormComponent.contextTypes = {
  router: PropTypes.object.isRequired
};

const UpdateBookForm = connect(mapStateToProps, mapDispatchToProps)(UpdateBookFormComponent);

export default UpdateBookForm;
