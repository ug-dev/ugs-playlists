module.exports = {
  root: true,
  extends: [
    '@react-native-community/eslint-config', // Default RN config
    'standard-with-typescript', // Installed in step 2
    'eslint-config-prettier', // Installed in step 3
  ],
  parser: '@typescript-eslint/parser', // Installed in step 2
  plugins: [
    '@typescript-eslint', // Installed in step 2
    'react', // Installed in step 1
    'react-native', // Installed in step 1
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json', // Required for Standard plugin
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'prettier/prettier': 'off', // Turn off prettier
    'react-native/no-unused-styles': 'error',
    'react-native/no-inline-styles': 'error',
    '@typescript-eslint/consistent-generic-constructors': 'off',
    'react-native/no-raw-text': [
      'warn',
      {
        skip: ['CustomText'],
      },
    ],
    'react-native/no-single-element-style-arrays': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'object-curly-spacing': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
