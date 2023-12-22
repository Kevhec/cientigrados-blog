import { defineConfig } from 'astro/config';

import { sanityIntegration } from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [sanityIntegration({
    projectId: "a0z0f7e5",
    dataset: "production",
    apiVersion: "2023-12-23",
    useCdn: false,
  })]
});