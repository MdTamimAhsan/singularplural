// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://MdTamimAhsan.github.io',
  base: '/singularplural',
  vite: {
    plugins: [tailwindcss()]
  }
});