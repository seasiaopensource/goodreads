const cors = require("cors");

/**
 * Function to handel the cors
 */
module.exports = function(app) {
  app.use(cors());
};
