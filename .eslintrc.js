module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],
  rules: {
    'linebreak-style': 0,
    'no-plusplus': 0,
    'import/named': 0,
    'arrow-body-style': 0,
    'operator-linebreak': 0,
    'react/jsx-fragments': 0,
    'object-curly-newline': 0,
    'react/forbid-prop-types': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/no-did-update-set-state': 0,
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
