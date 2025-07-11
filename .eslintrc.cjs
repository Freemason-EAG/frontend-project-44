module.exports = {
  extends: ['airbnb-base'],
  env: {
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
  },
  overrides: [
    {
      files: ['bin/*.js'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
