module.exports = {
  // Any application code written in TS (including styled-components)
  '*.ts?(x)': [
    'prettier --write --cache',
    'eslint --fix --cache',
    'stylelint --fix --cache',
    () => 'tsc -p tsconfig.json --noEmit',
  ],
  // Any supporting JS code (scripts, configs, etc.)
  '*.js?(x)': ['prettier --write --cache', 'eslint --fix --cache'],
  // All the rest files should follow prettier formatting
  '!((*.ts?(x))|(*.js?(x)))': 'prettier --ignore-unknown --write --cache',
};
