
import {
  GET_BOOKS_LIST,
} from './constant';



/**
 * Get User Info for Login
 * @param {String} email
 */
export const getBooksList = postData => ({
  type: GET_BOOKS_LIST, postData,
});
