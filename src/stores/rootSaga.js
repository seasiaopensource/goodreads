import { all } from 'redux-saga/effects';
import { getBookSaga } from './books/saga';


export default function* rootSaga() {
  yield all([
    getBookSaga(),
  ]);
}
