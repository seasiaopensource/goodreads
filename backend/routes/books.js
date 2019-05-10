const { searchBooks } = require("../models/books");
const express = require("express");
const router = express.Router();

/**
 * POST Method Function to handle the Search Request and Return the list of the books
 * @param req { name, pageNumber } name is used to get the book name for search and pageNUmber is user for pagination 
 * @param res it is used to send the reponse to end User.
 */
router.post("/search", async (req, res) => {
  const {name,pageNumber}  = req.body;
  let allBooks  = await searchBooks(name,pageNumber);
  res.send(allBooks);
});

module.exports = router;
