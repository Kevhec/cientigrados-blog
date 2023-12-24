import { defineConfig } from 'astro/config';

import { sanityIntegration } from "@sanity/astro";
import dotenv from 'dotenv';

dotenv.config({
  path: '.env'
})

export const sanityConfig = {
  projectId: process.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_STUDIO_DATASET,
  apiVersion: process.env.PUBLIC_SANITY_STUDIO_API_VERSION,
  useCdn: false,
}

// https://astro.build/config
export default defineConfig({
  site: 'https://kevhec.github.io',
  base: '/cientigrados-frontend',
  integrations: [sanityIntegration(sanityConfig)]
});