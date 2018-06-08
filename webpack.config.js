const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.sass$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(otf|ttf)$/,
      loader: 'url-loader?limit=8192&name=assets/fonts/font-[hash:6].[ext]'
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'url-loader?limit=8192&name=assets/img/img-[hash:6].[ext]'
    }]
  },
  plugins: [htmlPlugin],
  resolve: {
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      screens: path.join(__dirname, 'src', 'screens')
    }
  }
};
