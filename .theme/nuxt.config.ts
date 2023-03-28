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
  dir: {
    public: ".public"
  }
});
