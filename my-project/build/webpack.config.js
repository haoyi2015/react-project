/* build/webpack.config.js */
const config = {
  entry: './app/index.tsx',
  output: {
    filename: 'app.bundle.js',
    path: './public',
    publicPath: '/assets'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  devtool: 'eval'
}

module.exports = config