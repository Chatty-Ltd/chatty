module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            components: './src/views/components',
            utils: './src/utils',
            assets: './src/assets',
            modules: './src/modules',
            views: './src/views',
          },
        },
      ],
      'react-native-reanimated/plugin'
      // {
      //   "globals": ["__scanCodes"],
      // },
    ],
    env: {
      production: {
        plugins: [
          'transform-remove-console',
          'react-native-reanimated/plugin'
        ],
      },
    },
  };
  