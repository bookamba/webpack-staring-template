const path = require('path')

module.exports = {
  // Source files folder
  src: path.resolve(__dirname, '../src'),

  // Production build folder
  build: path.resolve(__dirname, '../dist'),

  // Files that get copied to build folder
  public: path.resolve(__dirname, '../public'),
}
