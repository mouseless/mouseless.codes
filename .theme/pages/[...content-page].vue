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
  ogTitle: page["seo-title"] ?? page.title,
  ogDescription: page["seo-description"],
  ogImage: fullUrl(page["seo-image"]),
  twitterTitle: page["seo-title"] ?? page.title,
  twitterDescription: page["seo-description"],
  twitterImage: fullUrl(page["seo-image"])
});

function fullUrl(path) {
  const { protocol, authority, baseUrl } = runtimeConfig.public;

  return `${protocol}://${joinURL(authority, baseUrl, path)}`;
}
</script>
