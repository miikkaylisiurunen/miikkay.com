// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://miikkay.com',
  env: {
    schema: {
      ASSET_VERSION: envField.string({
        context: 'server',
        access: 'public',
        default: crypto.randomUUID(),
      }),
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-family-sans',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    },
    {
      provider: fontProviders.google(),
      name: 'Roboto Mono',
      cssVariable: '--font-family-mono',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
