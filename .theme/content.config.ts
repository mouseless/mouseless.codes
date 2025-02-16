import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md"
    }),
    notFound: defineCollection({
      type: "page",
      source: "**/not-found.md"
    }),
    menus: defineCollection({
      type: "data",
      source: {
        include: "**/*.md",
        exclude: [
          "**/footer.md",
          "**/header.md",
          "**/not-found.md",
          "**/readme.md"
        ]
      },
      schema: z.object({
        path: z.string(),
        title: z.string(),
        "menu-title": z.string(),
        position: z.number()
      })
    }),
    footer: defineCollection({
      type: "page",
      source: "**/footer.md"
    })
  }
});
