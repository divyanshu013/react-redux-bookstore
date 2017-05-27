import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { fetchBooks, fetchAuthors } from '../actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  return createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk))
  );
}

const store = configureStore();
store.dispatch(fetchBooks());
store.dispatch(fetchAuthors());

export default store;
