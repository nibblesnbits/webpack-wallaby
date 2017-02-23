module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'src/**/*.js' },
      { pattern: 'src/**/*.spec.js', ignore: true },
      { pattern: 'src/store/*.js', ignore: true },
      { pattern: 'src/index*.js', ignore: true },
      { pattern: 'src/routes*.js', ignore: true },
      { pattern: 'src/webpack*.js', ignore: true },
      { pattern: 'src/*.prod.js', ignore: true },
      { pattern: 'src/constants/*.js', instrument: false },
      { pattern: 'src/sagas/rootSaga.js', ignore: true },
      { pattern: 'src/config*', instrument: false },
    ],

    tests: [
      { pattern: 'src/**/*.spec.js' },
    ],

    env: {
      type: 'node',
      runner: 'node',
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        "presets": [
          "latest",
          "react",
          "stage-2",
        ],
      }),
    },

    debug: true,

    setup: function () {
      process.env.NODE_ENV = 'test';
      require('jsdom-global/register');
      require('babel-polyfill');

      ['.css', '.scss', '.png', '.jpg'].forEach(ext => {
        require.extensions[ext] = () => null;
      });
    },
  };
};
