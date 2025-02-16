<template>
  <ContentRenderer v-if="page" :value="page" />
  <ContentRenderer v-else :value="notFound" />
</template>
<script setup>
import { joinURL } from "ufo";

const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const page = await queryCollection("content").path(route.path).first();
const notFound = await queryCollection("notFound").first();

useSeoMeta({
  ogTitle: page.meta["seo-title"] ?? page.title,
  ogDescription: page.meta["seo-description"],
  ogImage: fullUrl(page.meta["seo-image"]),
  twitterTitle: page.meta["seo-title"] ?? page.title,
  twitterDescription: page.meta["seo-description"],
  twitterImage: fullUrl(page.meta["seo-image"])
});

function fullUrl(path) {
  const { protocol, authority, baseUrl } = runtimeConfig.public;

  return `${protocol}://${joinURL(authority, baseUrl, path)}`;
}
</script>
