export default defineNuxtConfig({
  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    head: {
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://brand.mouseless.codes/assets/css/secondary.css"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        }
      ]
    }
  },
  components: {
    global: true,
    dirs: [
      {
        global: true,
        path: "~/components/Prose"
      },
      "~/components"
    ]
  },
  css: ["~/assets/styles.scss"],
  devtools: {
    enabled: false
  },
  dir: {
    public: ".public"
  },
  experimental: {
    payloadExtraction: false
  },
  features: {
    inlineStyles: false
  },
  generate: {
    routes: ["/not-found"]
  },
  modules: ["@nuxt/content", "@nuxtjs/mdc", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      authority: "",
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
      },
      protocol: ""
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import \"@/assets/_variables.scss\"; @import \"@/assets/_mixins.scss\";"
        }
      }
    }
  },
  compatibilityDate: "2024-08-15"
});
