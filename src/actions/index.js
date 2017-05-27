import BookApi from '../apis/mockBookApi';
import AuthorApi from '../apis/mockAuthorApi';

export const ADD_BOOK = 'ADD_BOOK';
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS';

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

export function fetchAuthorsSuccess(authors) {
  return {
    type: FETCH_AUTHORS_SUCCESS,
    authors
  };
}

export function fetchAuthors() {
  return dispatch => (
    AuthorApi.getAllAuthors()
      .then((authors) => {
        dispatch(fetchAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw (error);
      })
  );
}
