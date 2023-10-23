export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    head: {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://mouseless.github.io/brand/assets/css/default.css"
        }
      ]
    }
  },
  components: {
    dirs: [
      {
        global: true,
        path: "~/components/Prose"
      },
      "~/components"
    ]
  },
  devtools: {
    enabled: false
  },
  dir: {
    public: ".public"
  },
  experimental: {
    payloadExtraction: false
  },
  generate: {
    routes: ["/not-found"]
  },
  modules: ["@nuxt/content"],
  runtimeConfig: {
    public: {
      baseUrl: "",
      mdc: {
        headings: {
          anchorLinks: {
            h1: false,
            h2: false,
            h3: false,
            h4: false,
            h5: false,
            h6: false
          }
        }
      }
    }
  }
});
