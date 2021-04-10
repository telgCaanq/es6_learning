
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
 
module.exports = {
  entry: {
    index:path.join(__dirname, 'app', 'src')
     
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
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
      filename:'../html/index.html',
      template:path.join(__dirname, "app/html/index.html"),
      hash:true
    })
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    inline:true,
    hot:true,
    port:9000
  }
};
 