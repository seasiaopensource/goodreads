import { takeLatest, call, put } from 'redux-saga/effects';
import {
  GET_BOOKS_LIST,
  GET_BOOKS_LIST_SUCCESS,
  GET_BOOKS_LIST_ERROR,
} from './constant';

import { bookApi } from './api';


/**
 * action Type of GET_BOOK_LIST
 * @param {Object} action
 */
function* getBook(action) {
  try {
    const data = yield call(bookApi, action.postData);
    yield put({ type: GET_BOOKS_LIST_SUCCESS, data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: GET_BOOKS_LIST_ERROR, error });
  }
}

/**
 * Get books Saga
 */
export function* getBookSaga() {
  yield takeLatest(GET_BOOKS_LIST, getBook);
}
