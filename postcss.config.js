module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: 'defaults',
      importFrom: ['./src/theme/theme.js'],
      preserve: false,
    },
  },
};
