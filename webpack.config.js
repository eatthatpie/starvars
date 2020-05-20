var HtmlWebPackPlugin = require('html-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');
var path = require('path');
var { DefinePlugin } = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /.html$/,
        use: ['html-loader']
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    },
    extensions: ['.tsx', '.ts', '.js', '.json'],
    mainFiles: ['index']
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: './index.html',
        base: '/'
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, 'dist/assets')
        }
      ]
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: '#source-map'
};
