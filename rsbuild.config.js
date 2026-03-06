// @ts-check
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: 'Portfolio | Anisa Jamalenda',
    meta: {
      description: `Let's Talk!`,
    },
    template: './src/portfolio.html',
  },
  tools: {
    rspack: (config, { addRules }) => {
      addRules([
        {
          test: /\.html$/,
          use: 'html-loader',
        },
      ]);
    },
  },
});
