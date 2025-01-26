const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  // Set the mode to production
  mode: 'production',

  // Output configuration
  output: {
    path: path.resolve(__dirname, '../dist'), // The output directory (dist)
    filename: 'js/[name].[contenthash].js', // JavaScript files will go into the 'js' folder
    clean: true, // Cleans the output folder before each build
  },

  // Plugins for production
  plugins: [
    new CleanWebpackPlugin(), // Clean the dist folder before building
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css', // Hash CSS filenames for better caching
    }),
  ],

  // Optimization for production
  optimization: {
    minimize: true, // Enable minimization
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // Remove console logs in production
          },
        },
        extractComments: false, // Do not generate a separate license file
      }),
      new CssMinimizerPlugin(), // Minify CSS
    ],
  },

  module: {
    rules: [
      // For handling EJS templates
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          esModule: false,
        },
      },

      // Handling font files (e.g., .woff, .woff2, .ttf, .eot)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource', // Using file-loader replacement to store fonts as separate files
        generator: {
          filename: 'fonts/[name].[contenthash][ext]', // Use content hash for better caching
        },
      },

      // Handling SVG as separate files instead of base64
      {
        test: /\.svg$/,
        type: 'asset/resource', // Using file path instead of base64
        generator: {
          filename: 'images/[name].[contenthash][ext]', // Add content hash to filenames for better caching
        },
      },

      // Handling CSS/SCSS files with optimization for production
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: false, importLoaders: 1, modules: false }, // No source maps in production
          },
          'postcss-loader', // Use PostCSS for processing styles
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false, // No source maps in production
              sassOptions: {
                quietDeps: true, // Disable warnings from dependencies
              },
            },
          },
        ],
      },
    ],
  },

  stats: {
    warningsFilter: [
      /sass-loader/, // Ignore all warnings from sass-loader
    ],
  },
})
