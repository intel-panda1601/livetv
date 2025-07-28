const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  projectRoot: __dirname,
  resolver: {
    ...config.resolver,
    platforms: ['ios', 'android', 'native', 'web'],
    requireCycleIgnorePatterns: [/(^|\/|\\)node_modules($|\/|\\)/]
  }
};