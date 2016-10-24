'use strict'
const pkg = require('../package')

module.exports = {
  port: 4000,
  title: 'My-Vue',
  vendor: Object.keys(pkg.dependencies),
  babel: {
    babelrc: false,
    presets: [
      ['es2015', {modules: false}],
      'stage-1'
    ]
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['ie > 8']
    }),
    require('precss')
  ],
  cssModules: true,
}
