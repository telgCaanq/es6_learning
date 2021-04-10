
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
 
module.exports = {
  entry: {
    index:'./app/src/index.js',
    test:'./app/src/test.js'
    
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist/')
  },
  devServer: {
  
     
    port:9001
  },
  module: {
    rules: [{
      test: /.js?$/,
      include: [
        path.resolve(__dirname, 'app','src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules') 
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        plugins: ['transform-class-properties']
      }
    }]
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin( {
      filename:'./index.html',
      template:path.join(__dirname, "./app/html/index.html"),
      inject:'true',
      hash:true
    })
  ] 
  
  
};
 