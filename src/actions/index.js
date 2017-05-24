import BookApi from '../apis/mockBookApi';

export const ADD_BOOK = 'ADD_BOOK';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';

export function addBook(book) {
  return {
    type: ADD_BOOK,
    book
  };
}

export function fetchBooksSuccess(books) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    books
  };
}

export function fetchBooks() {
  return dispatch => (
    BookApi.getAllBooks()
      .then((books) => {
        dispatch(fetchBooksSuccess(books));
      })
      .catch((error) => {
        throw (error);
      })
  );
}
