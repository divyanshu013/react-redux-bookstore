import { ADD_BOOK, FETCH_BOOKS_SUCCESS } from '../actions';

export default function books(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book
      ];
    case FETCH_BOOKS_SUCCESS:
      return action.books;
    default:
      return state;
  }
}
