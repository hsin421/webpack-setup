var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    browserNoActivityTimeout: 30000,
    captureTimeout: 30000,
    frameworks: [ 'mocha' ],
    reporters: [ 'progress' ],

    files: [
      'app/**/*.test.js'
    ],

    preprocessors: {
      'app/**/*.test.js': [ 'webpack', 'sourcemap' ]
    },

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: [ '', '.js', '.jsx' ]
      },
      module: {
        loaders: [
          { test: /\.js?$/, loader: 'babel' },
          {
						test: /\.css$/, loader: 'style!css?modules'
					}
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('test')
        })
      ]
    },

    webpackServer: {
      noInfo: true
    }
  });
};