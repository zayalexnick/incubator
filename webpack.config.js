const path = require('path');

module.exports = require(path.resolve(__dirname, 'webpack', `webpack.${process.env.NODE_ENV}.config.js`));