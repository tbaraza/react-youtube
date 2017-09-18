const path = require('path');

const APP_FILE = path.join(__dirname, 'src/client/app/index.jsx');
const BUILD_DIR = path.join(__dirname, 'src/client/dist');

module.exports = {
  entry: APP_FILE,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },
};
