import { defineConfig } from 'astro/config';
import { sanityIntegration } from "@sanity/astro";
import dotenv from 'dotenv';
import tailwind from "@astrojs/tailwind";
dotenv.config({
  path: '.env'
});


// https://astro.build/config
export default defineConfig({
  site: 'https://kevhec.github.io',
  base: '/cientigrados-frontend',
  integrations: [sanityIntegration({
    projectId: process.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_STUDIO_DATASET,
    apiVersion: process.env.PUBLIC_SANITY_STUDIO_API_VERSION,
    useCdn: false
  }), tailwind({
    applyBaseStyles: false,
  })]
});