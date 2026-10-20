import next from 'eslint-config-next';
import { fixupConfigRules } from '@eslint/compat';

export default [
  ...fixupConfigRules(next),
  {
    settings: {
      react: {
        version: '19.3.0',
      },
    },
    rules: {
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
];
