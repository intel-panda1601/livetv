const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Set the app root for Expo Router
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = {
  ...config,
  resolver: {
    ...config.resolver,
    requireCycleIgnorePatterns: [/(^|\/|\\)node_modules($|\/|\\)/]
  }
};