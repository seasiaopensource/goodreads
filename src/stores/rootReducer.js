import { combineReducers } from 'redux';
import { bookStore } from './books/reducer';


const rootReducer = combineReducers({
  bookStore,
});

export default rootReducer;
