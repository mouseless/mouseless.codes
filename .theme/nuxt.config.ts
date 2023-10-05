import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  typescript: {
    typeCheck: true
  },
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
    baseURL: process.env.BASE_URL,
    head: {
      meta: [
        { charset: "utf-8" }
      ],
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://mouseless.github.io/brand/assets/css/default.css"
        }
      ]
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
  experimental: {
    payloadExtraction: false
  },
  router: {
    options: {
      strict: true
    }
  },
  dir: {
    public: ".public"
  },
  generate: {
    routes: ["/not-found"]
  }
});
