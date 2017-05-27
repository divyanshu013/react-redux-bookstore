import { connect } from 'react-redux';

import BookForm from '../../components/Books/BookForm';

const mapStateToProps = state => ({
  authors: state.authors
});

const AddBookForm = connect(mapStateToProps)(BookForm);

export default AddBookForm;
