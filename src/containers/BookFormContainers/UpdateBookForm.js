import { connect } from 'react-redux';

import BookForm from '../../components/Books/BookForm';

const mapStateToProps = state => ({
  authors: state.authors
});

const UpdateBookForm = connect(mapStateToProps)(BookForm);

export default UpdateBookForm;
