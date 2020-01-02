const path = require("path")
const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './src/index'),
  resolve: {
    extensions: ['.js', '.jsx', '.js', '.json'],
    modules: [path.resolve(__dirname, './node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
        ],
      },
    ]
  },
  plugins: [
    new MonacoEditorWebpackPlugin({
      languages: ['javascript', 'typescript', "json"]
    })
  ]
}
