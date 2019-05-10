const config = require('config');

/**
 * Function to check the privat key is configured or not
 */
module.exports = function() {
  if (!config.get('PrivateKey')) {
    throw new Error('FATAL ERROR: PrivateKey is not defined.');
  }
}