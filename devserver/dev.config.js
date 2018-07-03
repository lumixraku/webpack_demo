var path = require('path');
module.exports = {
    mode: "development",
    entry: {
        app: './src/app.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    },
    //...
    devServer: {
      port: 6010,
      contentBase: './dist',  //意思是  localhost:8081/app.js  会去dist 目录下找app.js
      proxy: {
        '/meta': 'http://localhost:6889',
        '/instance': 'http://localhost:6889',
      }
    }
  };