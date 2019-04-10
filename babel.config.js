module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry',
      }
    ],
    '@babel/preset-env'
  ],
  plugins: ['transform-vue-jsx']
};
