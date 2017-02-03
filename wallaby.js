const wallabyWebpack = require('wallaby-webpack');

module.exports = function (wallaby) {

  const webpackPostprocessor = wallabyWebpack({
    // webpack options

    externals: {
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': 'window'
    },
    resolve: {
      extensions: ['', '.js']
    }
  });

  return {
    files: [
      { pattern: 'node_modules/react/dist/react-with-addons.js', instrument: false },
      { pattern: 'src/**/*.js', load: false, instrument: true },
      { pattern: 'src/**/*.json', load: false, instrument: true },
      { pattern: 'src/**/*.spec.js', ignore: true },
    ],

    tests: [
      { pattern: 'src/**/*.spec.js', load: false },
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        "presets": [
          "latest",
          "react",
          "stage-2"
        ],
      }),
    },

    postprocessor: webpackPostprocessor,

    debug: true,

    setup: function () {
      console.log(window.$);
      window.__moduleBundler.loadTests();
    }
  };
};
