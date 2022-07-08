module.exports = {
  plugins: [require('postcss-preset-env')({ stage: 2, minimumVendorImplementations: 2, browsers: '> 0.5%, last 2 versions, Firefox ESR, not dead' })],
};
