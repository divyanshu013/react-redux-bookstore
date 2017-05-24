import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { fetchBooks } from '../actions';

function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}

const store = configureStore();
store.dispatch(fetchBooks());

export default store;
