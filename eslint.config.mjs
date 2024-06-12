import globals from "globals";


export default [
  {
    files: ["**/*.js"], languageOptions: { sourceType: "commonjs" }, rules: {
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': [
        'error', 'always'
      ],
      'arrow-spacing': [
        'error', { 'before': true, 'after': true }
      ],
      'no-console': 0
    },
  },
  { languageOptions: { globals: globals.node } },
];