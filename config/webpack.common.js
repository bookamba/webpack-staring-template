const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const paths = require('./paths')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const fs = require('fs')
const path = require('path')

// Source files folder
const templatesDir = path.resolve(__dirname, '../src')

// Get all template's files (.ejs)
const templateFiles = fs
  .readdirSync(templatesDir)
  .filter((file) => file.endsWith('.ejs')) // filter only .ejs
  .map((file) => ({
    name: file.replace('.ejs', ''),
    template: path.join(templatesDir, file),
  }))

// Use plugin HtmlWebpackPlugin for each template
const htmlPlugins = templateFiles.map((template) => {
  return new HtmlWebpackPlugin({
    title: 'Webpack Template',
    template: template.template,
    filename: `${template.name}.html`,
    inject: 'body', // Adds JS and CSS files at the end of the <body> tag.
  })
})

module.exports = {
  entry: [paths.src + '/index.js'],

  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css', // Where to store the generated CSS files
    }),

    // Cleaning up old files
    new CleanWebpackPlugin(),

    // Copying public files
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: '',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Add plugins for each HTML template
    ...htmlPlugins,
  ],

  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'] },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
