// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
    }),
    //    new MiniCssExtractPlugin({
    //     filename: isDevelopment ? '[name].css' : '[name].[hash].css',
    //     chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    //   })
  ],
  //    resolve: {
  //     extensions: ['.js', '.jsx', '.scss']
  //   }
};
