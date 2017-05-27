import { combineReducers } from 'redux';
import books from './books';
import authors from './authors';

const rootReducer = combineReducers({
  books,
  authors
});

export default rootReducer;
