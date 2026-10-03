// Flat ESLint config matching the previous `.eslintrc.json` intent
// (`next/core-web-vitals`). `next lint` no longer exists in Next 16, so
// `npm run lint` invokes `eslint .` directly against this config.
import next from 'eslint-config-next';

export default [...next];
