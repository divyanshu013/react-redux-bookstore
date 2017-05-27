import { FETCH_AUTHORS_SUCCESS } from '../actions';

export default function authors(state = [], action) {
  switch (action.type) {
    case FETCH_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
