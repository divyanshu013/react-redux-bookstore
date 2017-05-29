import { ADD_BOOK_SUCCESS, UPDATE_BOOK_SUCCESS, FETCH_BOOKS_SUCCESS } from '../actions';

export default function books(state = [], action) {
  switch (action.type) {
    case ADD_BOOK_SUCCESS:
      return [
        action.book,
        ...state
      ];
    case UPDATE_BOOK_SUCCESS:
      return [
        ...state.map(book => (book.id !== action.book.id ? book : action.book))
      ];
    case FETCH_BOOKS_SUCCESS:
      return action.books;
    default:
      return state;
  }
}
