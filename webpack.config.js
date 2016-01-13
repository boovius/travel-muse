module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },

  output: {
    path: __dirname + "/dist",
    publicPath: 'http://localhost:8080/',
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel"],
      },
      {
        test: /\.html$/,
        loaders: ["file?name=[name].[ext]"],
      },
      {
        test: /\.(png|jpg)$/,
        loaders: ["url-loader?limit=8192"],
      },
    ],
  },
};
