import { defineConfig } from 'astro/config';
// import deno from "@astrojs/deno";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  output: "static",
  // adapter: deno(),
  integrations: [tailwind(), react(), prefetch(), markdoc()]
});