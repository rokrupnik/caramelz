import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "hybrid",
  experimental: {
    hybridOutput: true,
  },
  adapter: netlify()
});