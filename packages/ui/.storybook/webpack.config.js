// Hack around https://github.com/storybooks/storybook/issues/3346
module.exports = (baseConfig, env, config) => {
  config.module.rules = config.module.rules.filter(rule => !(
    (rule.use && rule.use.length && rule.use.find(({loader}) => loader === 'babel-loader'))
  ));
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      sourceType: 'unambiguous',
      presets: [['react-app', {flow: false, typescript: true}]],
    },

  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};