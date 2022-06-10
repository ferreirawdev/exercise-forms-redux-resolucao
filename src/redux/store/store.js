import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import formsReducer from '../reducers/reducer';

const store = createStore(formsReducer, composeWithDevTools());

export default store;
