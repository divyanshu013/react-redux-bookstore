import BookApi from '../apis/mockBookApi';
import AuthorApi from '../apis/mockAuthorApi';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_AUTHORS_SUCCESS = 'FETCH_AUTHORS_SUCCESS';
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';

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

export function addBookSuccess(book) {
  return {
    type: ADD_BOOK_SUCCESS,
    book
  };
}

export function updateBookSuccess(book) {
  return {
    type: UPDATE_BOOK_SUCCESS,
    book
  };
}

export function saveBook(book) {
  return dispatch => (
    BookApi.saveBook(book).then(savedBook => (
      book.id ? dispatch(updateBookSuccess(savedBook)) : dispatch(addBookSuccess(saveBook))
    ))
    .catch((error) => {
      throw (error);
    })
  );
}
