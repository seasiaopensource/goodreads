import {
  INIT, SUCCESS, LOADING, ERROR,
} from '../../utils/constants';
import {
  GET_BOOKS_LIST,
  GET_BOOKS_LIST_SUCCESS,
  GET_BOOKS_LIST_ERROR,
} from './constant';


const initialState = {
  phase: INIT,
  book: [],
  error: null,
};

/**
 * User Reducer
 * @param {Object} state
 * @param {Object} action
 */
export function bookStore(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS_LIST:
      return {
        ...state,
        phase: LOADING,
      };
    case GET_BOOKS_LIST_SUCCESS:
    console.log('action.data',action.data.GoodreadsResponse)
      return {
        ...state,
        phase: SUCCESS,
        book: action.data.GoodreadsResponse !== undefined ? action.data.GoodreadsResponse : [],
        error: null,
      };
    case GET_BOOKS_LIST_ERROR:
      return { ...state, phase: ERROR, error: action.error };
    default:
      return state;
  }
}