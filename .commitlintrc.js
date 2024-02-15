const { parserPreset } = require('@dazn-footballco/commitlint-config');

module.exports = {
  extends: ['@dazn-footballco'],
  parserPreset,
  rules: {
    'jira-ticket': [
      2,
      'always',
      {
        allowedPrefixes: ['EDL', 'PLAT'],
      },
    ],
  },
};
