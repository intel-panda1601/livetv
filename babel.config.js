module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ['babel-preset-expo', { lazyImports: true }]
    ],
    plugins: [
      'react-native-reanimated/plugin',
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './app',
            '@app': './app',
          }
        }
      ]
    ]
  };
};