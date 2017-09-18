const path = require('path');
const webpack = require('webpack');
const express = require('express');
const open = require('open');
const webpackMiddlewate = require('webpack-dev-middleware')
const config = require('./webpack.config');

const port = process.env.PORT || 3001;
const app = express();
const compiler = webpack(config);
const middleware = webpackMiddlewate(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
});

app.use(middleware);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/client/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.info('Listening on port %s', port);
    open(`http://localhost:${port}`);
  }
});
