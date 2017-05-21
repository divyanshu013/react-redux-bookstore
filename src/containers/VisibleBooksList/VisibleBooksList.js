import { connect } from 'react-redux';
import BooksList from '../../components/Books/BooksList';

const mapStateToProps = state => ({
  books: state.books
});

const VisibleBooksList = connect(mapStateToProps)(BooksList);

export default VisibleBooksList;
