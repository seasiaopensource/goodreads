import axios from 'axios';


export const bookApi = async (postData) => {
  console.log('pageNumber', postData)

  try {
    return await axios({
      method: 'POST',
      url: `https://books--singhakhiesh.repl.co/api/books/search`,
      data: postData,
      headers: { 'Content-Type': 'application/json'},
    });
  } catch (e) {
    return [];
  }
}
 