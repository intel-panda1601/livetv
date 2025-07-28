module.exports = function (api) {
  api.cache(true);

  const envPath = '.env';
  const root = './app';
  process.env.EXPO_ROUTER_APP_ROOT = root;

  return {
    presets: [
      ['babel-preset-expo', { lazyImports: true }]
    ],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': root,
            '@app': root,
          }
        }
      ]
    ]
  };
};