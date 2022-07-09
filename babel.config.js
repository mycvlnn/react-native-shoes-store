module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '~': './src',
          '~components': './src/components',
          '~layouts': './src/layouts',
          '~configs': './src/configs',
          '~store': './src/store',
          '~assets': './src/assets',
          '~views': './src/views',
          '~routes': './src/routes',
        },
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
  ],
}
