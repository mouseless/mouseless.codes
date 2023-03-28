import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      content: {
        anchorLinks: {
          depth: 0
        }
      }
    }
  },
  app: {
    baseURL: process.env.BASE_URL
  },
  modules: [
    "@nuxt/content"
  ],
  content: {
    markdown: {
      remarkPlugins: {
        "remark-emoji": false
      }
    }
  },
  router: {
    options: {
      strict: true
    }
  },
  dir: {
    public: ".public"
  }
});
