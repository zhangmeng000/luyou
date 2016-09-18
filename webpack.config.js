var path = require('path');
var webpack = require('webpack');
module.exports = {
entry: [
    "webpack/hot/dev-server",
    path.resolve(__dirname, 'src/index')
  ],
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
  },
  devServer: {
  stats: { colors: true },
  port: 3000,
  inline: true,
  hot:true,
  historyApiFallback:true
},
plugins:[
  new webpack.HotModuleReplacementPlugin()
],
resolve: {
  extensions: ["", ".js", ".jsx"],
},
module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
    test: /\.css/,
    loader: 'style!css!autoprefixer'
    },
    {
     test: /\.(jpe?g|png)$/,
     loader: 'file-loader'
   },
   {
      test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000"
    }
  ]
}

};
//新建这个文件是为了package.json里面不用写入口和出口路径
