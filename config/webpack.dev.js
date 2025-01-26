const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    open: false,
    compress: true,
    hot: true,
    port: 8088,
    liveReload: true,
    watchFiles: ['src/**/*.ejs', 'src/*.ejs'],
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
  },

  stats: {
    warningsFilter: [/sass-loader/], // Ignore all warnings from sass-loader
  },

  module: {
    rules: [
      // For processing EJS templates
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        },
      },

      // Processing SVG as separate files instead of base64
      {
        test: /\.svg$/,
        type: 'asset/resource', // Uses the path instead of Base64
        generator: {
          filename: 'images/[name][ext]', // Path to save the SVG in the dist folder
        },
      },

      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                quietDeps: true,
              },
            },
          },
        ],
      },
    ],
  },
})
