import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import {CartReducer} from './reducers/CartReducer';

const middleware = [thunk];
if (__DEV__) {
  middleware.push(createLogger());
}

const defaultState = {};

const appReducer = combineReducers({
  cartReducer: CartReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(...middleware),
);

export default function getStore() {
  return store;
}
