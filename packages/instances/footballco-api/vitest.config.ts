import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from '../../../vitest.config.js';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      root: './',
    },
  }),
);
