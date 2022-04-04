const path = require('path');

const webpackDevServerPort = 8083;
const proxyTarget = "http://localhost:8492";

module.exports = {
  entry: {
    site: './src/js/site.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'wwwroot', 'dist')
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    proxy: {
      '*': {
        target: proxyTarget
      },
      port: webpackDevServerPort,
      contentBase: path.resolve(__dirname, 'wwwroot')
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(eot|woff(2)?|ttf|otf|svg)$/i,
        type: 'asset'
      }
    ]
  }
}
