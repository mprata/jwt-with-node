// config.js
var dotenv = require('dotenv');
dotenv.config();

module.exports = {
    'secret': process.env.SECRET
  };