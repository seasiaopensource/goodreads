const axios = require('axios');
const convert = require('xml-js');
const config = require("config");

/**
 * Function to hande the Request Call
 * @param {name} name 
 * @param {pageNumber} pageNumber 
 */

 const searchBooks = (name,pageNumber) => {
    const key = config.get("PrivateKey")
    return axios.get('https://www.goodreads.com/search/index.html?q='+name+'&key='+key+'&page='+pageNumber)
    .then(response => {
      return data = convert.xml2json(response.data, {compact: true, spaces: 4});  
    })
    .catch(error => {
      return data = convert.xml2json(error, {compact: true, spaces: 4});
    });
}



exports.searchBooks = searchBooks; 